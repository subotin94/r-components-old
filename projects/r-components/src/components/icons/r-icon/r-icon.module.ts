import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { RIconComponent } from './r-icon.component';

@NgModule({
  declarations: [
    RIconComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    RIconComponent
  ]
})
export class RIconModule { }
