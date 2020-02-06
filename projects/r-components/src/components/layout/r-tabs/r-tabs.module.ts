import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RTabsComponent } from './r-tabs.component';
import { RTabComponent } from './r-tab/r-tab.component';
import { RCardModule } from '../r-card/card';

const R_TABS_COMPONENTS = [
  RTabsComponent,
  RTabComponent
];

@NgModule({
  declarations: R_TABS_COMPONENTS,
  imports: [
    CommonModule,
    RCardModule
  ],
  exports: R_TABS_COMPONENTS
})
export class RTabsModule { }
