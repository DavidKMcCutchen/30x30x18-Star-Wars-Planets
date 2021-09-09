import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Planet } from "@workspace/api-interfaces";
import { PlanetsService } from "@workspace/core-data";
import * as PlanetActions from './planets.actions';
import { map, tap } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { Observable, pipe, UnaryFunction } from "rxjs";

const streamLogger = (): UnaryFunction<Observable<any>, Observable<any>> => pipe(
    tap(
        (res) => console.log(`Next: `, res),
        (err) => console.log(`Err: `, err),
        () => console.log('completed')
    )
);

@Injectable()
export class PlanetEffects{
    loadPlanet$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PlanetActions.loadPlanet),
            fetch({
                run: (action) =>
                    this.planetsService
                        .getOne(action.planetId)
                        .pipe(map((planet: Planet) => PlanetActions.loadPlanetSuccess({ planet }))),
                    onError: (action, error) => PlanetActions.loadPlanetFailed({ error })    
            })
        ));
    loadPlanets$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PlanetActions.loadPlanets),
            fetch({
                run: () =>
                    this.planetsService
                    .getAll()
                    .pipe(
                        streamLogger(),
                        map((planets: Planet[]) => PlanetActions.loadPlanetsSuccess({ planets }))
                    ),
                onError: (action, error) => PlanetActions.loadPlanetsFailed({ error })    
            })
        ));
    //     createPlanet$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(PlanetActions.createPlanet),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.planetsService
    //                     .create(action.planet)
    //                     .pipe(map((planet: Planet) => PlanetActions.createPlanetSuccess({ planet }))),
    //                 onError: (action, error) => PlanetActions.createPlanetFailed({ error })    
    //         })
    // ));

    // updatePlanet$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(PlanetActions.updatePlanet),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.planetsService
    //                     .update(action.planet)
    //                     .pipe(map((planet: Planet) => PlanetActions.updatePlanetSuccess({ planet}))),
    //                 onError: (action, error) => PlanetActions.updatePlanetFailed({ error })    
    //         })
    // ));

    // deletePlanet$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(PlanetActions.deletePlanet),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.planetsService
    //                     .delete(action.planet)
    //                     .pipe(
    //                         map(() => PlanetActions.deletePlanetSuccess({ planet: action.planet }))
    //                     ),
    //                 onError: (action, error) => PlanetActions.deletePlanetFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private planetsService: PlanetsService
    ) {}    
}