import { emptyPlanet } from "@workspace/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { planetAdapter, PlanetState, PLANET_FEATURE_KEY } from "./planets.reducer";

export const getPlanetState = createFeatureSelector<PlanetState>(PLANET_FEATURE_KEY);

const { selectAll, selectEntities } = planetAdapter.getSelectors();

export const getPlanetsLoaded = createSelector(
    getPlanetState,
    (state: PlanetState) => state.loaded
);

export const getPlanetError = createSelector(
    getPlanetState,
    (state: PlanetState) => state.error
);

export const getAllPlanets = createSelector(
    getPlanetState,
    (state: PlanetState) => selectAll(state)
);

export const getPlanetEntities = createSelector(
    getPlanetState,
    (state: PlanetState) => selectEntities(state)
);

export const getSelectedPlanetId = createSelector(
    getPlanetState,
    (state: PlanetState) => state.selectedId
);

export const getSelectedPlanet = createSelector(
    getPlanetEntities,
    getSelectedPlanetId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyPlanet
);