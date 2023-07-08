import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ns-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  @Input({ required: false }) type:
    | 'button'
    | 'menu'
    | 'reset'
    | 'submit'
    | undefined;
  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
