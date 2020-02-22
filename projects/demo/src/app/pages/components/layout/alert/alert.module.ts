import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { HighlightModule } from 'ngx-highlightjs';
import { RBrowserCardModule } from 'projects/r-components/src/components/extra/r-browser-card/browser-card';
import { RAlertModule } from 'projects/r-components/src/components/layout/alert';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    RAlertModule,
    HighlightModule,
    RBrowserCardModule
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
