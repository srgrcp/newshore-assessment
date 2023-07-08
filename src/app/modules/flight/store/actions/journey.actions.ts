import { createAction, props } from '@ngrx/store';
import { Journey } from '../../types/journey';

export const calculateJourney = createAction(
  '[Journey] Calculate Journey',
  props<{ origin: string; destination: string }>()
);

export const calculateJourneySuccess = createAction(
  '[Journey] Calculate Journey success',
  props<{ journey: Journey | null }>()
);

export const calculateJourneyError = createAction(
  '[Journey] Calculate Journey error'
);
