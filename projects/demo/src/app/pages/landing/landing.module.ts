import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import { IconsModule } from '../../components/icons/icons.module';

@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    HomeModule,
    IconsModule
  ]
})
export class LandingModule { }
