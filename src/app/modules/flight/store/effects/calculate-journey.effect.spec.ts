import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  FlightListState,
  flightListInitialState,
} from '../reducers/flight-list.reducer';
import { flightListStateSelector } from '../selectors/flight-list.selector';
import { testFlights } from './flight-list-testing-data';
import { CalculateJourneyEffect } from './calculate-journey.effect';
import { DijkstraService } from '../services/dijkstra.service';
import * as journeyActions from '../actions/journey.actions';

describe('CalculateJourneyEffect', () => {
  let actions$ = new Observable<Action>();
  let calculateJourneyEffect: CalculateJourneyEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CalculateJourneyEffect,
        DijkstraService,
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
      ],
    });

    calculateJourneyEffect = TestBed.inject(CalculateJourneyEffect);
  });

  it('calculateJourney$ should return the cheapest journey MEX - PEI', (done: DoneFn) => {
    const expectedAction = journeyActions.calculateJourneySuccess({
      journey: {
        origin: 'MEX',
        destination: 'PEI',
        price: 500,
        flights: [
          {
            origin: 'MEX',
            destination: 'BOG',
            price: 300,
            transport: {
              flightCarrier: 'MX',
              flightNumber: '9007',
            },
          },
          {
            origin: 'BOG',
            destination: 'PEI',
            price: 200,
            transport: {
              flightCarrier: 'CO',
              flightNumber: '9003',
            },
          },
        ],
      },
    });

    actions$ = of(
      journeyActions.calculateJourney({ origin: 'MEX', destination: 'PEI' })
    );

    calculateJourneyEffect.calculateJourney$.subscribe((nextAction) => {
      expect(nextAction).toEqual(expectedAction);
      done();
    });
  });

  it('calculateJourney$ should return the cheapest journey CAN - MEX', (done: DoneFn) => {
    const expectedAction = journeyActions.calculateJourneySuccess({
      journey: {
        origin: 'CAN',
        destination: 'MEX',
        price: 800,
        flights: [
          {
            origin: 'CAN',
            destination: 'CTG',
            price: 300,
            transport: {
              flightCarrier: 'MX',
              flightNumber: '9005',
            },
          },
          {
            origin: 'CTG',
            destination: 'BOG',
            price: 200,
            transport: {
              flightCarrier: 'CO',
              flightNumber: '9010',
            },
          },
          {
            origin: 'BOG',
            destination: 'MEX',
            price: 300,
            transport: {
              flightCarrier: 'CO',
              flightNumber: '8007',
            },
          },
        ],
      },
    });

    actions$ = of(
      journeyActions.calculateJourney({ origin: 'CAN', destination: 'MEX' })
    );

    calculateJourneyEffect.calculateJourney$.subscribe((nextAction) => {
      expect(nextAction).toEqual(expectedAction);
      done();
    });
  });

  it('calculateJourney$ should return null CAN - 000', (done: DoneFn) => {
    const expectedAction = journeyActions.calculateJourneySuccess({
      journey: null,
    });

    actions$ = of(
      journeyActions.calculateJourney({ origin: 'CAN', destination: '000' })
    );

    calculateJourneyEffect.calculateJourney$.subscribe((nextAction) => {
      expect(nextAction).toEqual(expectedAction);
      done();
    });
  });
});
