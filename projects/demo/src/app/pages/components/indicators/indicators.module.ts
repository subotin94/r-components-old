import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicatorsRoutingModule } from './indicators-routing.module';
import { IndicatorsComponent } from './indicators.component';


@NgModule({
  declarations: [IndicatorsComponent],
  imports: [
    CommonModule,
    IndicatorsRoutingModule
  ]
})
export class IndicatorsModule { }
