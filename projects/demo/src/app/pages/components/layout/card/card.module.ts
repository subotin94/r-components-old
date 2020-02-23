import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { RCardModule } from 'projects/r-components/src/components/layout/card';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    RCardModule
  ]
})
export class CardModule { }
