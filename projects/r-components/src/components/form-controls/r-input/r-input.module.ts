import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RInputDirective } from './r-input.directive';

@NgModule({
  declarations: [
    RInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RInputDirective
  ]
})
export class RInputModule { }
