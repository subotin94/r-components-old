import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RButtonModule, RAlertModule } from '../../../r-components/src/public-api';
import { RIconModule } from '../../../r-components/src/components/icons/r-icon/r-icon.module';
import { RBrowserCardModule } from '../../../r-components/src/components/extra/r-browser-card/browser-card';
import { RToastModule } from '../../../r-components/src/components/popups/r-toast/r-toast.module';
import { RInputModule } from '../../../r-components/src/components/form-controls/r-input/r-input.module';
import { RSelectModule } from '../../../r-components/src/components/form-controls/r-select/r-select.module';
import { RHintModule } from '../../../r-components/src/components/layout/r-hint/r-hint.module';
import { RCheckboxModule } from '../../../r-components/src/components/form-controls/r-checkbox/r-checkbox.module';
import { RLayoutModule } from '../../../r-components/src/components/layout/r-layout/r-layout.module';
import { RCardModule } from '../../../r-components/card';
import { RSidenavModule } from '../../../r-components/src/components/navigation/r-sidenav/r-sidenav.module';
import { RNavbarModule } from 'projects/r-components/src/components/navigation/r-navbar/r-navbar.module';
import { RLogoComponent } from './components/icons/r-logo.component';
import { DonateModule } from './pages/donate/donate.module';
import { RErrorModule } from 'projects/r-components/src/components/form-controls/r-error/r-error.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RLogoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighlightModule,
    ReactiveFormsModule,
    RButtonModule,
    RAlertModule,
    RIconModule,
    RBrowserCardModule,
    RInputModule,
    RErrorModule,
    RToastModule.forRoot(),
    RSelectModule,
    RHintModule,
    RCheckboxModule,
    MatDialogModule,
    RNavbarModule,
    RCardModule,
    RSidenavModule,
    RNavbarModule,
    DonateModule
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
