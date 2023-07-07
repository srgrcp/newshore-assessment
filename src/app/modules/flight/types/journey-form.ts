import { FormGroup, FormControl } from '@angular/forms';

export type JourneyInputForm = FormGroup<{
  origin: FormControl<string>;
  destination: FormControl<string>;
}>;
