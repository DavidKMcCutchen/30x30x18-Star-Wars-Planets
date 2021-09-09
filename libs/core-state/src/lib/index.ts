import { ActionReducerMap } from "@ngrx/store";
import * as fromPlanets from './planets/planets.reducer';

export interface AppState {
    [fromPlanets.PLANET_FEATURE_KEY]: fromPlanets.PlanetState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromPlanets.PLANET_FEATURE_KEY]: fromPlanets.planetReducer
};