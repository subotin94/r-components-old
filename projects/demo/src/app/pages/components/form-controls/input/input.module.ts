import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { RInputModule } from '../../../../../../../r-components/src/components/form-controls/r-input/r-input.module';
import { RBrowserCardModule } from '../../../../../../../r-components/src/components/extra/r-browser-card/browser-card';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    RInputModule,
    RBrowserCardModule,
    HighlightModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
