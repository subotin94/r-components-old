import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { RExpansionPanelModule } from 'projects/r-components/src/components/layout/expansion-panel';

@NgModule({
  declarations: [
    ExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    RExpansionPanelModule
  ],
  exports: [
    ExpansionPanelComponent
  ]
})
export class ExpansionPanelModule { }
