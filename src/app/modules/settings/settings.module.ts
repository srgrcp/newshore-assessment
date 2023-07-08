import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsServiceModule } from '../common/services/settings/settings-service.module';
import { CardComponent } from '../common/components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../common/components/button/button.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SettingsServiceModule,
    CardComponent,
    ReactiveFormsModule,
    ButtonComponent,
  ],
})
export class SettingsModule {}
