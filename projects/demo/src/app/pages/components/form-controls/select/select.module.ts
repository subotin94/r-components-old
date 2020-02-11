import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { RSelectModule } from '../../../../../../../r-components/src/components/form-controls/r-select/r-select.module';

@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    RSelectModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
