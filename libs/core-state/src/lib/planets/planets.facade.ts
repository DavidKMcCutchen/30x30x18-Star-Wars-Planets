import { Injectable } from "@angular/core";
import { Planet } from "@workspace/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as PlanetActions from './planets.actions';
import * as PlanetSelectors from './planets.selectors';
import * as fromPlanets from './planets.reducer';


@Injectable({
    providedIn: 'root'
})

export class PlanetFacade {
    allPlanets$ = this.store.pipe(
        select(PlanetSelectors.getAllPlanets),
    )
    selectedPlanets$ = this.store.pipe(select(PlanetSelectors.getSelectedPlanet));
    loaded$ = this.store.pipe(select(PlanetSelectors.getPlanetsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === PlanetActions.createPlanet({} as any) .type ||
        action.type === PlanetActions.updatePlanet({} as any) .type ||
        action.type === PlanetActions.deletePlanet({} as any) .type 
        ))

        selectPlanet(planetId: string) {
            this.dispatch(PlanetActions.selectPlanet({ planetId }));
        };

        loadPlanets() {
            this.dispatch(PlanetActions.loadPlanets())
        };

        loadPlanet(planetId: string) {
            this.dispatch(PlanetActions.loadPlanet({ planetId }))
        };

        savePlanet(planet: Planet) {
            planet.url ? this.updatePlanet(planet) : this.createPlanet(planet)
        };

        createPlanet(planet: Planet) {
            this.dispatch(PlanetActions.createPlanet({ planet }))
        };

        updatePlanet(planet: Planet) {
            this.dispatch(PlanetActions.updatePlanet({ planet }))
        };

        deletePlanet(planet: Planet) {
            this.dispatch(PlanetActions.deletePlanet({ planet }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromPlanets.PlanetPartialState>,
            private actions$: ActionsSubject
        ) {}
}