import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyResultComponent } from './journey-result.component';
import { signal } from '@angular/core';
import { initialJourneyState } from '../../store/reducers/journey.reducer';

describe('JourneyResultComponent', () => {
  let component: JourneyResultComponent;
  let fixture: ComponentFixture<JourneyResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyResultComponent],
    });
    fixture = TestBed.createComponent(JourneyResultComponent);
    component = fixture.componentInstance;
    component.journeyState = signal(initialJourneyState);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
