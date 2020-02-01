import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlsRoutingModule } from './form-controls-routing.module';
import { FormControlsComponent } from './form-controls.component';


@NgModule({
  declarations: [FormControlsComponent],
  imports: [
    CommonModule,
    FormControlsRoutingModule
  ]
})
export class FormControlsModule { }
