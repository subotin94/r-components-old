import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RNavbarComponent } from './r-navbar.component';
import { RNavbarActionsComponent, RNavbarActionDirective, RNavbarLinkDirective } from './r-navbar-actions';

const R_NAVBAR_COMPONENTS = [
  RNavbarComponent,
  RNavbarActionDirective,
  RNavbarActionsComponent,
  RNavbarLinkDirective
];

@NgModule({
  declarations: R_NAVBAR_COMPONENTS,
  imports: [
    CommonModule
  ],
  exports: R_NAVBAR_COMPONENTS
})
export class RNavbarModule { }

