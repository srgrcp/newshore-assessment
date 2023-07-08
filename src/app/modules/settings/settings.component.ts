import { Component, WritableSignal } from '@angular/core';
import { SettingsService } from '../common/services/settings/settings.service';
import { SettingsForm } from '../flight/types/settings-form';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
})
export class SettingsComponent {
  currencyOptions: String[];
  currentCurrency: WritableSignal<string>;

  settingsForm: SettingsForm;

  constructor(
    private settingsService: SettingsService,
    private fb: FormBuilder
  ) {
    this.currencyOptions = this.settingsService.currencyOptions;
    this.currentCurrency = this.settingsService.currency;

    this.settingsForm = this.fb.nonNullable.group({
      currency: [this.currentCurrency() || 'USD', [Validators.required]],
    });
  }

  setCurrency() {
    const newCurrency = this.settingsForm.value.currency || 'USD';
    this.settingsService.setCurrency(newCurrency);
  }
}
