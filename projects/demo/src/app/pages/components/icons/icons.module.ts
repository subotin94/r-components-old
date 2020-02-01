import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';


@NgModule({
  declarations: [IconsComponent],
  imports: [
    CommonModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }
