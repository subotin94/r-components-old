import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopupsComponent } from './popups.component';


@NgModule({
  declarations: [PopupsComponent],
  imports: [
    CommonModule,
    PopupsRoutingModule
  ]
})
export class PopupsModule { }
