import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RExpansionPanelComponent } from './r-expansion-panel.component';
import { RIconModule } from '../../icons/r-icon/r-icon.module';
import { RExpansionPanelHeaderComponent } from './r-expansion-panel-header/r-expansion-panel-header.component';
import { RButtonModule } from '../r-button/button';
import { RCardModule } from '../r-card/card';
import { RExpansionPanelBodyComponent } from './r-expansion-panel-body/r-expansion-panel-body.component';

const R_EXPANSION_PANEL_COMPONENTS = [
  RExpansionPanelComponent,
  RExpansionPanelHeaderComponent,
  RExpansionPanelBodyComponent
];

@NgModule({
  declarations: R_EXPANSION_PANEL_COMPONENTS,
  imports: [
    CommonModule,
    RIconModule,
    RButtonModule,
    RCardModule
  ],
  exports: R_EXPANSION_PANEL_COMPONENTS
})
export class RExpansionPanelModule { }
