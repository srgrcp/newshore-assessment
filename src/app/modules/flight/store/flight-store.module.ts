import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { flightReducers } from './flight.feature';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    StoreModule.forFeature('flightFeature', flightReducers),
    EffectsModule.forFeature([]),
    HttpClientModule,
  ],
})
export class FlightStoreModule {}
