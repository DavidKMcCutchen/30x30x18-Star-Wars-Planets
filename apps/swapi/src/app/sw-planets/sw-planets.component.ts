import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Planet, emptyPlanet } from '@workspace/api-interfaces';
import { PlanetFacade } from '@workspace/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'workspace-sw-planets',
  templateUrl: './sw-planets.component.html',
  styleUrls: ['./sw-planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  allPlanets$: Observable<Planet[]> = this.planetFacade.allPlanets$;
  selectedPlanet$: Observable<Planet> = this.planetFacade.selectedPlanets$;

  form: FormGroup;

  constructor(
    private planetFacade: PlanetFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.planetFacade.mutations$.subscribe((_) => this.resetPlanet());
  }

  ngOnInit() {
    this.initForm();
    this.planetFacade.loadPlanets();
    this.resetPlanet()

    const planetRouteId = this.route.snapshot.params['id'];

    if (planetRouteId) {
      this.loadPlanet((planetRouteId))
    }
  }

  viewPlanet(planetId: string) {
    this.router.navigate(["planets", planetId])
  }

  loadPlanet(planetId: string) {
    this.planetFacade.selectPlanet(planetId);
    this.planetFacade.loadPlanet(planetId);
  }

  selectPlanet(planet: Planet) {
    this.planetFacade.selectPlanet(planet.url)
    this.form.patchValue(planet);
  }

  savePlanet(planet: Planet) {
    this.planetFacade.savePlanet(planet);
  }

  deletePlanet(planet: Planet) {
    this.planetFacade.deletePlanet(planet);
  }

  resetPlanet() {
    this.form.reset();
    this.selectPlanet(emptyPlanet)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      name: [''],
      rotation_period: [''],
      orbital_period: [''],
      diameter: [''],
      climate: [''],
      gravity: [''],
      terrain: [''],
      surface_water: [''],
      population: [''],
      residents: [],
      films: [],
      created: [''],
      edited: [''],
      url: ['']
    })
  }
}

