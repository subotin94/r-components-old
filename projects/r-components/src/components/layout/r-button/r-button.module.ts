import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RButtonComponent } from './r-button.component';
import { RIconModule } from '../../icons/r-icon/r-icon.module';

@NgModule({
  declarations: [
    RButtonComponent
  ],
  imports: [
    CommonModule,
    RIconModule
  ],
  exports: [
    RButtonComponent
  ]
})
export class RButtonModule { }
