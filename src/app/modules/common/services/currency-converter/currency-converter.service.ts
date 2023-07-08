import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CurrencyRateResponse } from '../../types/currency-rate-response';
import { environment } from 'src/environments/environment';

@Injectable()
export class CurrencyConverterService {
  constructor(private http: HttpClient) {}

  private getRateFromUsdTo(currency: string): Observable<number> {
    return this.http
      .get<CurrencyRateResponse>(
        `${environment.currencyAPI}/rates/latest?apikey=${environment.currencyAPIKey}&symbols=${currency}&base=${environment.baseCurrency}`
      )
      .pipe(map((response) => Number(response.rates[currency])));
  }

  convertUsdTo(currency: string, amount: number): Observable<number> {
    return this.getRateFromUsdTo(currency).pipe(map((rate) => rate * amount));
  }
}
