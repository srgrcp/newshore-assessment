import { createReducer, on } from '@ngrx/store';
import { Journey } from '../../types/journey';

import * as journeyActions from '../actions/journey.actions';

export type JourneyState = {
  journey: Journey | null;
  loading: boolean;
  error: boolean;
};

export const initialJourneyState: JourneyState = {
  journey: null,
  loading: false,
  error: false,
};

export const journeyReducer = createReducer(
  initialJourneyState,
  on(journeyActions.calculateJourney, () => ({
    journey: null,
    loading: true,
    error: false,
  })),
  on(journeyActions.calculateJourneySuccess, (_, { journey }) => ({
    journey,
    loading: false,
    error: false,
  })),
  on(journeyActions.calculateJourneyError, (state) => ({
    ...state,
    loading: false,
    error: true,
  }))
);
