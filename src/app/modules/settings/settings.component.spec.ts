import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { SettingsServiceModule } from '../common/services/settings/settings-service.module';
import { CardComponent } from '../common/components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../common/components/button/button.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [
        SettingsServiceModule,
        CardComponent,
        ReactiveFormsModule,
        ButtonComponent,
      ],
    });
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
