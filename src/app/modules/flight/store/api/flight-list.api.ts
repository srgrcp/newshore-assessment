import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightApiResponse } from '../../types/flight';
import { environment } from 'src/environments/environment';

@Injectable()
export class FlightListApi {
  constructor(private http: HttpClient) {}

  fetchFlightList(): Observable<FlightApiResponse[]> {
    return this.http.get<FlightApiResponse[]>(
      `${environment.baseFlightURL}/api/flights/2`
    );
  }
}
