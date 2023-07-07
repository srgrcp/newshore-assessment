import {
  FormControl,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function mustNotBeEqualThan(
  otherControl: FormControl<string>
): ValidatorFn {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    return control.value.toUpperCase() === otherControl.value.toUpperCase()
      ? { duplicatedControls: { value: control.value } }
      : null;
  };
}
