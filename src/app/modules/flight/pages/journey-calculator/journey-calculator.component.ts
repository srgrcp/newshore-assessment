import { Component, OnInit, Signal, computed, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { mustNotBeEqualThan } from 'src/app/modules/common/validators/must-not-be-equal-than';
import { JourneyInputForm } from '../../types/journey-form';
import { FlightListLoaderService } from '../../services/flight-list-loader.service';
import { JourneyCalculatorService } from '../../services/journey-calculator.service';
import { JourneyState } from '../../store/reducers/journey.reducer';
import { Journey } from '../../types/journey';

type Step = 'FORM' | 'RESULT';

@Component({
  selector: 'ns-journey-calculator',
  templateUrl: './journey-calculator.component.html',
  styleUrls: ['./journey-calculator.component.sass'],
})
export class JourneyCalculatorComponent implements OnInit {
  journeyInputForm: JourneyInputForm;
  hasSubmited = signal(false);
  step = signal<Step>('FORM');

  readonly FORM_STEP: Step = 'FORM';
  readonly RESULT_STEP: Step = 'RESULT';

  journeyState: Signal<JourneyState>;

  constructor(
    private fb: FormBuilder,
    private flightListLoaderService: FlightListLoaderService,
    private journeyCalculatorService: JourneyCalculatorService
  ) {
    this.journeyState = this.journeyCalculatorService.journeyState;

    this.journeyInputForm = this.fb.nonNullable.group({
      origin: [
        '',
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)],
      ],
      destination: [
        '',
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)],
      ],
    });

    // Add non-duplicated fields validation
    this.journeyInputForm.controls.origin.addValidators(
      mustNotBeEqualThan(this.destinationControl)
    );
    this.journeyInputForm.controls.destination.addValidators(
      mustNotBeEqualThan(this.originControl)
    );
  }

  ngOnInit(): void {
    this.flightListLoaderService.preloadFlightList();
  }

  get originControl() {
    return this.journeyInputForm.controls.origin;
  }
  get destinationControl() {
    return this.journeyInputForm.controls.destination;
  }

  calculate() {
    this.hasSubmited.set(true);
    if (!this.journeyInputForm.valid) {
      return;
    }

    const request = this.journeyInputForm.value;
    const destination: string = request.destination?.toUpperCase() + '';
    const origin: string = request.origin?.toUpperCase() + '';

    this.journeyCalculatorService.calculateJourney({ origin, destination });

    this.step.set('RESULT');
  }

  goToForm() {
    this.step.set('FORM');
  }
}
