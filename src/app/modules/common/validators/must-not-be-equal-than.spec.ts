import { TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { mustNotBeEqualThan } from './must-not-be-equal-than';

describe('mustNotBeEqualThan', () => {
  let inputForm: FormGroup<{
    controlA: FormControl<string>;
    controlB: FormControl<string>;
  }>;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    });
    fb = TestBed.inject(FormBuilder);

    inputForm = fb.nonNullable.group({
      controlA: ['', [Validators.required]],
      controlB: ['', [Validators.required]],
    });

    // Add non-duplicated fields validation
    inputForm.controls.controlA.addValidators(
      mustNotBeEqualThan(inputForm.controls.controlB)
    );
    inputForm.controls.controlB.addValidators(
      mustNotBeEqualThan(inputForm.controls.controlA)
    );
  });

  it('should be valid with 2 different values', () => {
    inputForm.controls.controlA.setValue('foo');
    inputForm.controls.controlB.setValue('bar');

    const isValid = inputForm.valid;

    expect(isValid).toBeTrue();
  });

  it('should not be valid with same value', () => {
    inputForm.controls.controlA.setValue('foo');
    inputForm.controls.controlB.setValue('foo');

    const isValid = inputForm.valid;

    expect(isValid).toBeFalse();
  });

  it('should not be valid with same values, but different case', () => {
    inputForm.controls.controlA.setValue('foo');
    inputForm.controls.controlB.setValue('FOO');

    const isValid = inputForm.valid;

    expect(isValid).toBeFalse();
  });
});
