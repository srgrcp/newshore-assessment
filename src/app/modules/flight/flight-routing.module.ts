import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JourneyCalculatorComponent } from './pages/journey-calculator/journey-calculator.component';

const routes: Routes = [{ path: '', component: JourneyCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightRoutingModule {}
