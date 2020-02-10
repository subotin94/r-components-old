import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { RToastModule } from 'projects/r-components/src/public-api';

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    RToastModule.forRoot()
  ],
  exports: [
    ToastComponent
  ]
})
export class ToastModule { }
