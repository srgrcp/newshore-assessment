import { Injectable, WritableSignal, effect, signal } from '@angular/core';

const CURRENCY = 'CURRENCY';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  currency: WritableSignal<string>;
  readonly currencyOptions = ['USD', 'EUR', 'COP', 'GBP', 'MXN'];

  constructor() {
    this.currency = signal(localStorage.getItem(CURRENCY) || 'USD');

    effect(() => {
      localStorage.setItem(CURRENCY, this.currency());
    });
  }

  setCurrency(newCurrency: string) {
    this.currency.set(newCurrency);
  }
}
