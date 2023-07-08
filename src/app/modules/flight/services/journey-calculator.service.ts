import { Injectable, Signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map, mergeMap, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  JourneyState,
  initialJourneyState,
} from '../store/reducers/journey.reducer';
import { journeyStateSelector } from '../store/selectors/journey.selector';
import { calculateJourney } from '../store/actions/journey.actions';
import { CurrencyConverterService } from '../../common/services/currency-converter/currency-converter.service';
import { SettingsService } from '../../common/services/settings/settings.service';

@Injectable()
export class JourneyCalculatorService {
  journeyState$: Observable<JourneyState>;
  journeyState: Signal<JourneyState>;

  constructor(
    private store: Store,
    private currencyConverterService: CurrencyConverterService,
    private settingsService: SettingsService
  ) {
    this.journeyState$ = this.store.pipe(
      select(journeyStateSelector),
      // update price to customer currency
      mergeMap((state) => {
        //return state with no updates if journey is null
        if (!state.journey) {
          return of(state);
        }

        const price = state.journey.price;
        const currency = this.settingsService.currency();
        return this.currencyConverterService.convertUsdTo(currency, price).pipe(
          map<number, JourneyState>((newPrice) => {
            if (!state.journey) {
              return state;
            }

            // return the same state opbejc, but with the customer currency price
            return {
              ...state,
              journey: {
                ...state.journey,
                price: newPrice,
              },
            };
          })
        );
      })
    );

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
