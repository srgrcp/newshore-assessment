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

  constructor() {
    this.journey = computed(() => this.journeyState().journey);
    this.isJourneyLoading = computed(() => this.journeyState().loading);
    this.hasJourneyError = computed(() => this.journeyState().error);
  }

  goBack() {
    this.goToForm.emit();
  }
}
