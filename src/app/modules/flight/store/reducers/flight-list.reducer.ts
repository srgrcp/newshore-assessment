import { createReducer, on } from '@ngrx/store';
import { Flight } from '../../types/flight';

import * as flightsActions from '../actions/flight-list.actions';

export type FlightListState = {
  flights: Flight[] | null;
  loading: boolean;
  error: boolean;
};

export const flightListInitialState: FlightListState = {
  flights: null,
  loading: false,
  error: false,
};

export const flightListReducer = createReducer(
  flightListInitialState,
  on(flightsActions.fetchFlights, (state) => {
    if (state.flights) {
      return state;
    }
    return {
      flights: null,
      loading: true,
      error: false,
    };
  }),
  on(flightsActions.fetchFlightsSuccess, (_, { flights }) => {
    return {
      flights,
      loading: false,
      error: false,
    };
  }),
  on(flightsActions.fetchFlightsError, (state) => ({
    ...state,
    loading: false,
    error: true,
  }))
);
