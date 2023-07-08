import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { GetFlightsEffect } from './get-flights.effect';
import { FlightListApi } from '../api/flight-list.api';
import { FlightState } from '../flight.feature';
import {
  FlightListState,
  flightListInitialState,
} from '../reducers/flight-list.reducer';
import { flightListStateSelector } from '../selectors/flight-list.selector';
import { testFlights, testFlightsApi } from './flight-list-testing-data';
import * as flightsActions from '../actions/flight-list.actions';
import { flightApiResponseToFlight } from '../../utils/flight-api-response-to-flight';

describe('GetFlightsEffect', () => {
  let store: MockStore<FlightState>;
  let actions$ = new Observable<Action>();
  let getFlightsEffect: GetFlightsEffect;

  it('getFlights$ should return flight list and call setFlights action', (done: DoneFn) => {
    const flightListApi = jasmine.createSpyObj('FlightListApi', [
      'fetchFlightList',
    ]);
    const fetchFlightListSpy = flightListApi.fetchFlightList.and.returnValue(
      of(testFlightsApi)
    );

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        GetFlightsEffect,
        provideMockActions(() => actions$),
        provideMockStore<FlightListState>({
          initialState: flightListInitialState,
          selectors: [
            {
              selector: flightListStateSelector,
              value: {
                flights: null,
                loading: false,
                error: false,
              },
            },
          ],
        }),
        { provide: FlightListApi, useValue: flightListApi },
      ],
    });

    getFlightsEffect = TestBed.inject(GetFlightsEffect);
    store = TestBed.inject(MockStore);

    const expectedAction = flightsActions.fetchFlightsSuccess({
      flights: testFlightsApi.map((flights) =>
        flightApiResponseToFlight(flights)
      ),
    });

    actions$ = of(flightsActions.fetchFlights);

    getFlightsEffect.getFlights$.subscribe((nextAction) => {
      expect(nextAction).toEqual(expectedAction);
      expect(fetchFlightListSpy.calls.any())
        .withContext('fetchFlightList called')
        .toBe(true);
      done();
    });
  });

  it('getFlights$ should not call api request if flight list already exists', (done: DoneFn) => {
    const flightListApi = jasmine.createSpyObj('FlightListApi', [
      'fetchFlightList',
    ]);
    const fetchFlightListSpy = flightListApi.fetchFlightList.and.returnValue(
      of(testFlightsApi)
    );

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        GetFlightsEffect,
        provideMockActions(() => actions$),
        provideMockStore<FlightListState>({
          initialState: flightListInitialState,
          selectors: [
            {
              selector: flightListStateSelector,
              value: {
                flights: testFlights,
                loading: false,
                error: false,
              },
            },
          ],
        }),
        { provide: FlightListApi, useValue: flightListApi },
      ],
    });

    getFlightsEffect = TestBed.inject(GetFlightsEffect);
    store = TestBed.inject(MockStore);

    const expectedAction = flightsActions.fetchFlightsSuccess({
      flights: testFlightsApi.map((flights) =>
        flightApiResponseToFlight(flights)
      ),
    });

    actions$ = of(flightsActions.fetchFlights);

    getFlightsEffect.getFlights$.subscribe((nextAction) => {
      expect(nextAction).toEqual(expectedAction);
      expect(fetchFlightListSpy.calls.any())
        .withContext('fetchFlightList not be called')
        .toBe(false);
      done();
    });
  });
});
