import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { CardComponent } from '../common/components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightStoreModule } from './store/flight-store.module';
import { JourneyCalculatorComponent } from './pages/journey-calculator/journey-calculator.component';
import { JourneyFormComponent } from './components/journey-form/journey-form.component';

@NgModule({
  declarations: [JourneyFormComponent, JourneyCalculatorComponent],
  imports: [
    CommonModule,
    FlightRoutingModule,
    CardComponent,
    ReactiveFormsModule,
    FlightStoreModule,
  ],
})
export class FlightModule {}
