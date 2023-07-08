import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyResultComponent } from './journey-result.component';

describe('JourneyResultComponent', () => {
  let component: JourneyResultComponent;
  let fixture: ComponentFixture<JourneyResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyResultComponent]
    });
    fixture = TestBed.createComponent(JourneyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
