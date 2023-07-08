import { Injectable } from '@angular/core';
import { FlightStoreModule } from '../flight-store.module';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { withLatestFrom, mergeMap, of } from 'rxjs';
import { DijkstraService } from '../services/dijkstra.service';
import { flightListStateSelector } from '../selectors/flight-list.selector';

import * as journeyActions from '../actions/journey.actions';

@Injectable({
  providedIn: FlightStoreModule,
})
export class CalculateJourneyEffect {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private dijkstraService: DijkstraService
  ) {}

  calculateJourney$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(journeyActions.calculateJourney),
      withLatestFrom(this.store$.pipe(select(flightListStateSelector))),
      mergeMap(([{ origin, destination }, state]) => {
        if (!state.flights) {
          return of(journeyActions.calculateJourneyError());
        }
        const journey = this.dijkstraService.calculateJourney(
          state.flights,
          origin,
          destination
        );
        return of(journeyActions.calculateJourneySuccess({ journey }));
      })
    );
  });
}
