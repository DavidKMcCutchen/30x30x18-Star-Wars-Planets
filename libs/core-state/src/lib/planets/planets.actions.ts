import { createAction, props } from "@ngrx/store";
import {  Planet } from "@workspace/api-interfaces";

// Select Entity

export const selectPlanet = createAction(
    '[PLANET] Select Planet',
    props<{ planetId: string }>()
);

// Load all Entities

export const loadPlanets = createAction(
    '[PLANET] Load Planets'
);

export const loadPlanetsSuccess = createAction(
    '[PLANET] Load Planets Success',
    props<{ planets: Planet[]}>()
);

export const loadPlanetsFailed = createAction(
    '[PLANET] Load Planets Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadPlanet = createAction(
    '[PLANET] Load Planet',
    props<{ planetId: string}>()
);

export const loadPlanetSuccess = createAction(
    '[PLANET] Load Planet Success',
    props<{ planet: Planet}>()
);

export const loadPlanetFailed = createAction(
    '[PLANET] Load Planet Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createPlanet = createAction(
    '[PLANET] Create Planet',
    props<{ planet: Planet}>()
);

export const createPlanetSuccess = createAction(
    '[PLANET] Create Planet Success',
    props<{ planet: Planet}>()
);

export const createPlanetFailed = createAction(
    '[PLANET] Create Planet Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updatePlanet = createAction(
    '[PLANET] Update Planet',
    props<{ planet: Planet}>()
);

export const updatePlanetSuccess = createAction(
    '[PLANET] Update Planet Success',
    props<{ planet: Planet}>()
);

export const updatePlanetFailed = createAction(
    '[PLANET] Create Planet Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deletePlanet = createAction(
    '[PLANET] Delete Planet',
    props<{ planet: Planet}>()
);

export const deletePlanetSuccess = createAction(
    '[PLANET] Delete Planet Success',
    props<{ planet: Planet}>()
);

export const deletePlanetFailed = createAction(
    '[PLANET] Create Planet Failed',
    props<{ error: any}>()
);