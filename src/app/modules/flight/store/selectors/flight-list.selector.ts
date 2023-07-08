import { createSelector } from '@ngrx/store';
import { FlightState, selectflightFeatureState } from '../flight.feature';

export const flightListStateSelector = createSelector(
  selectflightFeatureState,
  (state: FlightState) => state.flightList
);
