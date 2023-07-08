import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fetchFlights } from '../store/actions/flight-list.actions';
import { Observable, take } from 'rxjs';
import { FlightListState } from '../store/reducers/flight-list.reducer';
import { flightListStateSelector } from '../store/selectors/flight-list.selector';

@Injectable()
export class FlightListLoaderService {
  flightListState$: Observable<FlightListState>;

  constructor(private store: Store) {
    this.flightListState$ = this.store.pipe(select(flightListStateSelector));
  }

  preloadFlightList() {
    this.flightListState$.pipe(take(1)).subscribe((state) => {
      if (!state.flights) {
        this.store.dispatch(fetchFlights());
      }
    });
  }
}
