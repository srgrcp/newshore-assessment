import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyCalculatorComponent } from './journey-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/modules/common/components/card/card.component';
import { JourneyFormComponent } from '../../components/journey-form/journey-form.component';
import { FlightListLoaderService } from '../../services/flight-list-loader.service';
import { provideMockStore } from '@ngrx/store/testing';
import {
  FlightListState,
  flightListInitialState,
} from '../../store/reducers/flight-list.reducer';
import { flightListStateSelector } from '../../store/selectors/flight-list.selector';
import { JourneyCalculatorService } from '../../services/journey-calculator.service';
import { ButtonComponent } from 'src/app/modules/common/components/button/button.component';
import { CurrencyConverterServiceModule } from 'src/app/modules/common/services/currency-converter/currency-converter-service.module';

describe('JourneyCalculatorComponent', () => {
  let component: JourneyCalculatorComponent;
  let fixture: ComponentFixture<JourneyCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyCalculatorComponent, JourneyFormComponent],
      imports: [
        CardComponent,
        ReactiveFormsModule,
        ButtonComponent,
        CurrencyConverterServiceModule,
      ],
      providers: [
        FlightListLoaderService,
        JourneyCalculatorService,
        provideMockStore<FlightListState>({
          initialState: flightListInitialState,
          selectors: [
            {
              selector: flightListStateSelector,
              value: {
                flights: null,
                loading: false,
                error: false,
              },
            },
          ],
        }),
      ],
    });
    fixture = TestBed.createComponent(JourneyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update hasSubmited', () => {
    component.calculate();

    expect(component.hasSubmited()).toBeTrue();
  });
});
