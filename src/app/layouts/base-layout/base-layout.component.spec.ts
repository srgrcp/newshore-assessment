import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutComponent } from './base-layout.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseLayoutComponent, RouterTestingModule],
    });
    fixture = TestBed.createComponent(BaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
