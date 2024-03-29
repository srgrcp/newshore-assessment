import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { CardComponent } from '../common/components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightStoreModule } from './store/flight-store.module';
import { JourneyCalculatorComponent } from './pages/journey-calculator/journey-calculator.component';
import { JourneyFormComponent } from './components/journey-form/journey-form.component';
import { FlightListLoaderService } from './services/flight-list-loader.service';
import { JourneyCalculatorService } from './services/journey-calculator.service';
import { JourneyResultComponent } from './components/journey-result/journey-result.component';
import { ButtonComponent } from '../common/components/button/button.component';
import { CurrencyConverterServiceModule } from '../common/services/currency-converter/currency-converter-service.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    JourneyFormComponent,
    JourneyCalculatorComponent,
    JourneyResultComponent,
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    CardComponent,
    ReactiveFormsModule,
    FlightStoreModule,
    ButtonComponent,
    CurrencyConverterServiceModule,
    HttpClientModule,
  ],
  providers: [FlightListLoaderService, JourneyCalculatorService],
})
export class FlightModule {}
