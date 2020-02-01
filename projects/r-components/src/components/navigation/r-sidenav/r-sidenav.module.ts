import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

import { RSidenavComponent } from './r-sidenav.component';
import { RSidenavContainerComponent } from './r-sidenav-container/r-sidenav-container.component';
import { RSidenavContentComponent } from './r-sidenav-content/r-sidenav-content.component';

const R_SIDENAV_COMPONENTS = [
  RSidenavComponent,
  RSidenavContainerComponent,
  RSidenavContentComponent
];

@NgModule({
  declarations: R_SIDENAV_COMPONENTS,
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  exports: R_SIDENAV_COMPONENTS
})
export class RSidenavModule { }
