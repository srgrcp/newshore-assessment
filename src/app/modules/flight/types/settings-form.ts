import { FormGroup, FormControl } from '@angular/forms';

export type SettingsForm = FormGroup<{
  currency: FormControl<string>;
}>;
