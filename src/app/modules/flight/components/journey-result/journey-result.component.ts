import {
  Component,
  EventEmitter,
  Input,
  Output,
  Signal,
  computed,
} from '@angular/core';
import { JourneyState } from '../../store/reducers/journey.reducer';
import { Journey } from '../../types/journey';
import { SettingsService } from 'src/app/modules/common/services/settings/settings.service';

@Component({
  selector: 'ns-journey-result',
  templateUrl: './journey-result.component.html',
  styleUrls: ['./journey-result.component.sass'],
})
export class JourneyResultComponent {
  @Input({ required: true }) journeyState!: Signal<JourneyState>;
  @Output() goToForm = new EventEmitter();

  journey: Signal<Journey | null>;
  isJourneyLoading: Signal<boolean>;
  hasJourneyError: Signal<boolean>;
  currency: Signal<string>;

  constructor(private settingsService: SettingsService) {
    this.journey = computed(() => this.journeyState().journey);
    this.isJourneyLoading = computed(() => this.journeyState().loading);
    this.hasJourneyError = computed(() => this.journeyState().error);
    this.currency = settingsService.currency;
  }

  goBack() {
    this.goToForm.emit();
  }
}
