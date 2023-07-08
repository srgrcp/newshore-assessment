import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {
  FlightListState,
  flightListReducer,
} from './reducers/flight-list.reducer';
import { JourneyState, journeyReducer } from './reducers/journey.reducer';

export type FlightState = {
  flightList: FlightListState;
  journey: JourneyState;
};

export const flightReducers: ActionReducerMap<FlightState> = {
  flightList: flightListReducer,
  journey: journeyReducer,
};

export const selectflightFeatureState =
  createFeatureSelector<FlightState>('flightFeature');
