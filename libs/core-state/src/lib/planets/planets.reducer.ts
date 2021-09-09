import { Planet } from "@workspace/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as PlanetActions from './planets.actions';

export const PLANET_FEATURE_KEY = 'planets';

export interface PlanetState extends EntityState<Planet> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface PlanetPartialState {
    readonly [PLANET_FEATURE_KEY]: PlanetState
};

export const planetAdapter: EntityAdapter<Planet> = createEntityAdapter<Planet>();

export const initialPlanetState: PlanetState = planetAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): PlanetState => ({ ...state, error});

const onDispatch = (state, action): PlanetState => ({
    ...state,
    loaded: false,
    error: null
});

const _planetReducer = createReducer(
    initialPlanetState,
    on(
        PlanetActions.loadPlanetFailed,
        PlanetActions.loadPlanetsFailed,
        PlanetActions.createPlanetFailed,
        PlanetActions.updatePlanetFailed,
        PlanetActions.deletePlanetFailed,
        onFailed
    ),
    on(
        PlanetActions.loadPlanet,
        PlanetActions.loadPlanets,
        PlanetActions.createPlanet,
        PlanetActions.updatePlanet,
        PlanetActions.deletePlanet,
        onDispatch
    ),
    on(
        PlanetActions.loadPlanetSuccess, (state, { planet }) =>
        planetAdapter.upsertOne(planet, {...state, loaded: true})
    ),
    on(
        PlanetActions.selectPlanet, (state, { planetId }) => ({
            ...state,
            selectedId: planetId
        })
    ),
    on(
        PlanetActions.loadPlanetsSuccess, (state, { planets }) =>
        planetAdapter.setAll(planets, {...state, loaded: true})
    ),
    on(
        PlanetActions.deletePlanetSuccess, (state, { planet }) =>
        planetAdapter.removeOne(planet.url, {...state, loaded: true})
    ),
    on(
        PlanetActions.updatePlanetSuccess, (state, { planet }) =>
        planetAdapter.updateOne(
            {id: planet.url, changes: planet},
            {...state, loaded: true}
        )
    ),
    on(
        PlanetActions.createPlanetSuccess, (state, {planet }) =>
        planetAdapter.addOne(planet, {...state, loaded: true})
    ),
)

export function planetReducer(
    state: PlanetState | undefined,
    action: Action
) {
    return _planetReducer(state, action)
}