import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlsRoutingModule } from './form-controls-routing.module';
import { FormControlsComponent } from './form-controls.component';
import { InputModule } from './input/input.module';
import { SelectModule } from './select/select.module';

@NgModule({
  declarations: [
    FormControlsComponent
  ],
  imports: [
    CommonModule,
    FormControlsRoutingModule,
    InputModule,
    SelectModule
  ]
})
export class FormControlsModule { }
