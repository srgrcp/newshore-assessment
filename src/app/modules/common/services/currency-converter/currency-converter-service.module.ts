import { NgModule } from '@angular/core';
import { CurrencyConverterService } from './currency-converter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [CurrencyConverterService],
  imports: [HttpClientModule],
})
export class CurrencyConverterServiceModule {}
