import { Injectable } from '@angular/core';
import { FlightStoreModule } from '../flight-store.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightApiResponse } from '../../types/flight';

@Injectable({
  providedIn: FlightStoreModule,
})
export class FlightListApi {
  constructor(private http: HttpClient) {}

  fetchFlightList(): Observable<FlightApiResponse[]> {
    return this.http.get<FlightApiResponse[]>(
      'https://recruiting-api.newshore.es/api/flights/2'
    );
  }
}
