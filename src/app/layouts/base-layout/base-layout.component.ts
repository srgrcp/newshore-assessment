import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from 'src/app/modules/common/components/navbar/navbar.component';

@Component({
  selector: 'ns-base-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.sass'],
})
export class BaseLayoutComponent {}
