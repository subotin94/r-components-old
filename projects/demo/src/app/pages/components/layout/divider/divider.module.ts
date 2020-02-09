import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider.component';
import { RDividerModule } from 'projects/r-components/src/components/layout/r-divider/r-divider.module';



@NgModule({
  declarations: [
    DividerComponent
  ],
  imports: [
    RDividerModule
  ],
  exports: [
    DividerComponent
  ]
})
export class DividerModule { }
