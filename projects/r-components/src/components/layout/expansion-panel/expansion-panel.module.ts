import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RExpansionPanelComponent } from './expansion-panel.component';
import { RIconModule } from '../../icons/r-icon/r-icon.module';
import { RExpansionPanelHeaderComponent } from './expansion-panel-header/expansion-panel-header.component';
import { RCardModule } from '../card';
import { RExpansionPanelBodyComponent } from './expansion-panel-body/expansion-panel-body.component';
import { RButtonModule } from '../button';

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
