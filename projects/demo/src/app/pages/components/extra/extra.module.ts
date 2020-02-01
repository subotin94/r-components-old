import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraRoutingModule } from './extra-routing.module';
import { ExtraComponent } from './extra.component';


@NgModule({
  declarations: [ExtraComponent],
  imports: [
    CommonModule,
    ExtraRoutingModule
  ]
})
export class ExtraModule { }
