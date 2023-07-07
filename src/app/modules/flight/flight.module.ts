import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightComponent } from './flight.component';
import { CardComponent } from '../common/components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JourneyFormComponent } from './journey-form/journey-form.component';
import { FlightStoreModule } from './store/flight-store.module';

@NgModule({
  declarations: [FlightComponent, JourneyFormComponent],
  imports: [
    CommonModule,
    FlightRoutingModule,
    CardComponent,
    ReactiveFormsModule,
    FlightStoreModule,
  ],
})
export class FlightModule {}
