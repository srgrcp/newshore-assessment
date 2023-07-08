import { createAction, props } from '@ngrx/store';
import { Flight } from '../../types/flight';

export const fetchFlights = createAction('[Flight List] Fetch flights');

export const fetchFlightsSuccess = createAction(
  '[Flight List] Fetch flights success',
  props<{ flights: Flight[] }>()
);

export const fetchFlightsError = createAction(
  '[Flight List] Fetch flights error'
);
