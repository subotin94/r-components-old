import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { RCardModule } from '../../../../../../../r-components/card';

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
