import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightComponent } from './flight.component';
import { CardComponent } from '../common/components/card/card.component';
import { JourneyFormComponent } from './journey-form/journey-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FlightComponent', () => {
  let component: FlightComponent;
  let fixture: ComponentFixture<FlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightComponent, JourneyFormComponent],
      imports: [CardComponent, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(FlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update hasSubmited', () => {
    component.calculate();

    expect(component.hasSubmited()).toBeTrue();
  });
});
