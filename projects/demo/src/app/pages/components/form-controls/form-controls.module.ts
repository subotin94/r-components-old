import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlsRoutingModule } from './form-controls-routing.module';
import { FormControlsComponent } from './form-controls.component';
import { InputModule } from './input/input.module';

@NgModule({
  declarations: [
    FormControlsComponent
  ],
  imports: [
    CommonModule,
    FormControlsRoutingModule,
    InputModule
  ]
})
export class FormControlsModule { }
