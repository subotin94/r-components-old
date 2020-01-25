import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RSidenavComponent } from './r-sidenav.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    RSidenavComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule
  ],
  exports: [
    RSidenavComponent
  ]
})
export class RSidenavModule { }
