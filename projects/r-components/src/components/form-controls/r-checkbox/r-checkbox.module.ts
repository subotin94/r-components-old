import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RCheckboxComponent } from './r-checkbox.component';
import { RIconModule } from '../../icons/r-icon/r-icon.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RCheckboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RIconModule
  ],
  exports: [
    RCheckboxComponent
  ]
})
export class RCheckboxModule { }
