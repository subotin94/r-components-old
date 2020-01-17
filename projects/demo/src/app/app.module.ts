import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RButtonModule, RAlertModule } from '../../../r-components/src/public-api';
import { RIconModule } from '../../../r-components/src/components/icons/r-icon/r-icon.module';
import { RBrowserCardModule } from '../../../r-components/src/components/extra/r-browser-card/browser-card';
import { RToastModule } from '../../../r-components/src/components/popups/r-toast/r-toast.module';
import { RInputModule } from '../../../r-components/src/components/form-controls/r-input/r-input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HighlightModule,
    RButtonModule,
    RAlertModule,
    RIconModule,
    RBrowserCardModule,
    RInputModule,
    RToastModule.forRoot()
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
