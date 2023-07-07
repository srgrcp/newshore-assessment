import { Component, signal } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { JourneyInputForm } from './types/journey-form';

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
      this.mustNotBeEqualThan(this.destinationControl)
    );
    this.journeyInputForm.controls.destination.addValidators(
      this.mustNotBeEqualThan(this.originControl)
    );
  }

  get originControl() {
    return this.journeyInputForm.controls.origin;
  }
  get destinationControl() {
    return this.journeyInputForm.controls.destination;
  }

  mustNotBeEqualThan(otherControl: FormControl<string>): ValidatorFn {
    return (control: AbstractControl<string>): ValidationErrors | null => {
      return control.value.toUpperCase() === otherControl.value.toUpperCase()
        ? { duplicatedControls: { value: control.value } }
        : null;
    };
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
