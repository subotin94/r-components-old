import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { RToastModule, RButtonModule } from 'projects/r-components/src/public-api';
import { HighlightModule } from 'ngx-highlightjs';
import { RBrowserCardModule } from '../../../../../../../r-components/src/components/extra/r-browser-card/browser-card';

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    HighlightModule,
    RBrowserCardModule,
    RButtonModule,
    RToastModule.forRoot()
  ],
  exports: [
    ToastComponent
  ]
})
export class ToastModule { }
