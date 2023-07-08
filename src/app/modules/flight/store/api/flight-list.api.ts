import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightApiResponse } from '../../types/flight';

@Injectable()
export class FlightListApi {
  constructor(private http: HttpClient) {}

  fetchFlightList(): Observable<FlightApiResponse[]> {
    return this.http.get<FlightApiResponse[]>(
      'https://recruiting-api.newshore.es/api/flights/2'
    );
  }
}
