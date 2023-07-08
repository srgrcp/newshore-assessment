import { createSelector } from '@ngrx/store';
import { FlightState, selectflightFeatureState } from '../flight.feature';

export const journeyStateSelector = createSelector(
  selectflightFeatureState,
  (state: FlightState) => state.journey
);
