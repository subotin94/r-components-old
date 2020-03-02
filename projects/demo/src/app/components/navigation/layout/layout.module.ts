import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RLayoutModule } from '../../../../../../r-components/src/components/layout/r-layout/r-layout.module';
import { RSidenavModule } from '../../../../../../r-components/src/components/navigation/r-sidenav/r-sidenav.module';
import { RExpansionPanelListModule, RExpansionPanelModule } from '../../../../../../r-components/src/public_api';
import { RNavbarModule } from '../../../../../../r-components/src/components/navigation/r-navbar';
import { IconsModule } from '../../icons/icons.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    RLayoutModule,
    RSidenavModule,
    RExpansionPanelListModule,
    RExpansionPanelModule,
    RNavbarModule,
    IconsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
