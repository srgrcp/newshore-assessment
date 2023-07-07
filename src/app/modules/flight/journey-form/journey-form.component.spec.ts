import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyFormComponent } from './journey-form.component';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { mustNotBeEqualThan } from '../../common/validators/must-not-be-equal-than';
import { signal } from '@angular/core';

describe('JourneyFormComponent', () => {
  let component: JourneyFormComponent;
  let fixture: ComponentFixture<JourneyFormComponent>;
  let fb: FormBuilder;

  let originControl: FormControl<string>;
  let destinationControl: FormControl<string>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyFormComponent],
      imports: [ReactiveFormsModule],
    });
    fb = TestBed.inject(FormBuilder);
    fixture = TestBed.createComponent(JourneyFormComponent);
    component = fixture.componentInstance;

    // @Input() journeyInputForm
    component.journeyInputForm = fb.nonNullable.group({
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
    component.journeyInputForm.controls.origin.addValidators(
      mustNotBeEqualThan(component.journeyInputForm.controls.destination)
    );
    component.journeyInputForm.controls.destination.addValidators(
      mustNotBeEqualThan(component.journeyInputForm.controls.origin)
    );

    originControl = component.journeyInputForm.controls.origin;
    destinationControl = component.journeyInputForm.controls.destination;

    // @Input() hasSubmited
    component.hasSubmited = signal(false);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be valid with valid inputs', () => {
    originControl.setValue('foo');
    destinationControl.setValue('bar');

    const isValid = component.journeyInputForm.valid;

    expect(isValid).toBeTrue();
  });

  it('should form be not valid with one field too long', () => {
    originControl.setValue('fooo');
    destinationControl.setValue('bar');

    const isValid = component.journeyInputForm.valid;

    expect(isValid).toBeFalse();
  });

  it('should form be not valid with one field too short', () => {
    originControl.setValue('fo');
    destinationControl.setValue('bar');

    const isValid = component.journeyInputForm.valid;

    expect(isValid).toBeFalse();
  });

  it('should form be not valid with same value in both fields', () => {
    originControl.setValue('foo');
    destinationControl.setValue('foo');

    const isValid = component.journeyInputForm.valid;

    expect(isValid).toBeFalse();
  });

  it('should form be not valid with same values, but different case', () => {
    originControl.setValue('foo');
    destinationControl.setValue('FOO');

    const isValid = component.journeyInputForm.valid;

    expect(isValid).toBeFalse();
  });
});
