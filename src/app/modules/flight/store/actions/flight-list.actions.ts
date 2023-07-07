import { createAction, props } from '@ngrx/store';
import { Flight } from '../../types/flight';

export const getFlights = createAction('[Flight List] Get flights');

export const setFlights = createAction(
  '[Flight List] Set flights',
  props<{ flights: Flight[] }>()
);

export const getFlightsError = createAction('[Flight List] Get Flights error');
