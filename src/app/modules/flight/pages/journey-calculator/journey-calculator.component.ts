import { Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { mustNotBeEqualThan } from 'src/app/modules/common/validators/must-not-be-equal-than';
import { JourneyInputForm } from '../../types/journey-form';

@Component({
  selector: 'ns-journey-calculator',
  templateUrl: './journey-calculator.component.html',
  styleUrls: ['./journey-calculator.component.sass'],
})
export class JourneyCalculatorComponent {
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
