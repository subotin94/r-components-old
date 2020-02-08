import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { RExpansionPanelModule } from 'projects/r-components/src/components/layout/r-expansion-panel/r-expansion-panel.module';

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
