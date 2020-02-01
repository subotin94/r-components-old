import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
