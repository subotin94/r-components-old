import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RTabsComponent } from './r-tabs.component';
import { RTabComponent } from './r-tab/r-tab.component';
import { RTabActiveLabelComponent } from './r-tab-active-label/r-tab-active-label.component';
import { RCardModule } from '../card';

const R_TABS_COMPONENTS = [
  RTabsComponent,
  RTabComponent
];

@NgModule({
  declarations: [
    RTabActiveLabelComponent,
    ...R_TABS_COMPONENTS
  ],
  imports: [
    CommonModule,
    RCardModule
  ],
  exports: R_TABS_COMPONENTS
})
export class RTabsModule { }
