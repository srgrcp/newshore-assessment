import { Component, signal } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { JourneyInputForm } from './types/journey-form';
import { mustNotBeEqualThan } from '../common/validators/must-not-be-equal-than';

@Component({
  selector: 'ns-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.sass'],
})
export class FlightComponent {
  journeyInputForm: JourneyInputForm;
  hasSubmited = signal(false);

  constructor(private fb: FormBuilder) {
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
    request.destination = request.destination?.toUpperCase();
    request.origin = request.origin?.toUpperCase();
  }
}
