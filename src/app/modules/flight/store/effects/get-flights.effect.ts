import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { FlightStoreModule } from '../flight-store.module';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { flightListStateSelector } from '../selectors/flight-list.selector';
import { FlightListApi } from '../api/flight-list.api';
import { Flight } from '../../types/flight';
import { flightApiResponseToFlight } from '../../utils/flight-api-response-to-flight';

import * as flightsActions from '../actions/flight-list.actions';

@Injectable({
  providedIn: FlightStoreModule,
})
export class GetFlightsEffect {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private flightListApi: FlightListApi
  ) {}

  getFlights$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(flightsActions.fetchFlights),
      withLatestFrom(this.store$.pipe(select(flightListStateSelector))),
      mergeMap(([_, state]) => {
        // Skip API request if already done
        if (state.flights) {
          return of(
            flightsActions.fetchFlightsSuccess({ flights: state.flights })
          );
        }

        // Make  a request only if flight list is null
        return this.flightListApi.fetchFlightList().pipe(
          map((flightListResponse) => {
            const flights: Flight[] = flightListResponse.map((flightResponse) =>
              flightApiResponseToFlight(flightResponse)
            );
            return flightsActions.fetchFlightsSuccess({ flights });
          }),
          catchError(() => of(flightsActions.fetchFlightsError()))
        );
      })
    );
  });
}
