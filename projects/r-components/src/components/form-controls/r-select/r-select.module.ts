import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSelectModule } from '@angular/material/select';

import { RSelectComponent } from './r-select.component';
import { RSelectLabelComponent } from './r-select-label/r-select-label.component';
import { ROptionComponent } from './r-option/r-option.component';
import { ROptionGroupComponent } from './r-option-group/r-option-group.component';
import { PortalModule } from '@angular/cdk/portal';
import { RButtonModule } from '../../layout/button';

const R_SELECT_COMPONENTS = [
  RSelectComponent,
  RSelectLabelComponent,
  ROptionComponent,
  ROptionGroupComponent
];

@NgModule({
  declarations: R_SELECT_COMPONENTS,
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    RButtonModule,
    MatSelectModule
  ],
  exports: R_SELECT_COMPONENTS
})
export class RSelectModule { }
