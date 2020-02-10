import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { PopupsComponent } from './popups.component';
import { ToastModule } from './toast/toast.module';

@NgModule({
  declarations: [
    PopupsComponent
  ],
  imports: [
    CommonModule,
    PopupsRoutingModule,
    ToastModule
  ]
})
export class PopupsModule { }
