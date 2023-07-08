import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { flightReducers } from './flight.feature';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { GetFlightsEffect } from './effects/get-flights.effect';
import { CalculateJourneyEffect } from './effects/calculate-journey.effect';
import { FlightListApi } from './api/flight-list.api';
import { DijkstraService } from './services/dijkstra.service';

@NgModule({
  imports: [
    StoreModule.forFeature('flightFeature', flightReducers),
    EffectsModule.forFeature([GetFlightsEffect, CalculateJourneyEffect]),
    HttpClientModule,
  ],
  providers: [FlightListApi, DijkstraService],
})
export class FlightStoreModule {}
