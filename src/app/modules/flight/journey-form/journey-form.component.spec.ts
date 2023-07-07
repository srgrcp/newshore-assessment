import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyFormComponent } from './journey-form.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { mustNotBeEqualThan } from '../../common/validators/must-not-be-equal-than';
import { signal } from '@angular/core';

describe('JourneyFormComponent', () => {
  let component: JourneyFormComponent;
  let fixture: ComponentFixture<JourneyFormComponent>;
  let fb: FormBuilder;

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

    // @Input() hasSubmited
    component.hasSubmited = signal(false);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
