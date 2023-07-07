import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { FlightStoreModule } from '../flight-store.module';

import * as flightsActions from '../actions/flight-list.actions';
import { catchError, map, mergeMap, of, withLatestFrom } from 'rxjs';
import { flightsStateSelector } from '../selectors/flight-list.selector';
import { FlightListApi } from '../api/flight-list.api';
import { Flight } from '../../types/flight';
import { flightApiResponseToFlight } from '../../utils/flight-api-response-to-flight';

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
      ofType(flightsActions.getFlights),
      withLatestFrom(this.store$.pipe(select(flightsStateSelector))),
      mergeMap(([_, state]) => {
        // Skip API request if already done
        if (state.flights) {
          return of(flightsActions.setFlights({ flights: state.flights }));
        }

        // Make  a request only if flight list is null
        return this.flightListApi.fetchFlightList().pipe(
          map((flightListResponse) => {
            const flights: Flight[] = flightListResponse.map((flightResponse) =>
              flightApiResponseToFlight(flightResponse)
            );
            return flightsActions.setFlights({ flights });
          }),
          catchError(() => of(flightsActions.getFlightsError()))
        );
      })
    );
  });
}
