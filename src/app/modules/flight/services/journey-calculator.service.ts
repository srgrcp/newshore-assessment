import { Injectable, Signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  JourneyState,
  initialJourneyState,
} from '../store/reducers/journey.reducer';
import { journeyStateSelector } from '../store/selectors/journey.selector';
import { calculateJourney } from '../store/actions/journey.actions';

@Injectable()
export class JourneyCalculatorService {
  journeyState$: Observable<JourneyState>;
  journeyState: Signal<JourneyState>;

  constructor(private store: Store) {
    this.journeyState$ = this.store.pipe(select(journeyStateSelector));
    this.journeyState = toSignal(this.journeyState$, {
      initialValue: initialJourneyState,
    });
  }

  calculateJourney({
    origin,
    destination,
  }: {
    origin: string;
    destination: string;
  }) {
    this.store.dispatch(calculateJourney({ origin, destination }));
  }
}
