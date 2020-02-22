import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { HighlightModule } from 'ngx-highlightjs';
import { RBrowserCardModule } from '../../../../../../../r-components/src/components/extra/r-browser-card/browser-card';
import { RToastModule } from 'projects/r-components/src/components/popups/r-toast/toast';
import { RButtonModule } from 'projects/r-components/src/components/layout/button';

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
