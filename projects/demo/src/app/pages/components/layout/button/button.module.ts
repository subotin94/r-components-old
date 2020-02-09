import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { HighlightModule } from 'ngx-highlightjs';
import { RBrowserCardModule } from 'projects/r-components/src/components/extra/r-browser-card/browser-card';
import { RHintModule } from 'projects/r-components/src/components/layout/r-hint/r-hint.module';
import { RButtonModule } from 'projects/r-components/src/public-api';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RButtonModule,
    HighlightModule,
    RBrowserCardModule,
    RHintModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
