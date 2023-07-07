import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {
  FlightListState,
  flightListReducer,
} from './reducers/flight-list.reducer';

export type FlightState = {
  flightList: FlightListState;
};

export const flightReducers: ActionReducerMap<FlightState> = {
  flightList: flightListReducer,
};

export const selectflightFeatureState =
  createFeatureSelector<FlightState>('flightFeature');
