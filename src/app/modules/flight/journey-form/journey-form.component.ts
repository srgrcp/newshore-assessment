import {
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
} from '@angular/core';
import { JourneyInputForm } from '../types/journey-form';

@Component({
  selector: 'ns-journey-form',
  templateUrl: './journey-form.component.html',
  styleUrls: ['./journey-form.component.sass'],
})
export class JourneyFormComponent {
  @Input({ required: true }) journeyInputForm!: JourneyInputForm;
  @Input({ required: true }) hasSubmited!: WritableSignal<boolean>;
  @Output() onSubmit = new EventEmitter();

  get isOriginNotEmpty() {
    return !!this.journeyInputForm?.value.origin;
  }
  get isDestinationNotEmpty() {
    return !!this.journeyInputForm?.value.destination;
  }

  get isJourneyInputFormValid() {
    return this.journeyInputForm?.valid;
  }

  submit() {
    this.onSubmit.emit();
  }
}
