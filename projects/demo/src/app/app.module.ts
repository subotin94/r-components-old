import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RLayoutModule } from '../../../r-components/src/components/layout/r-layout/r-layout.module';
import { RSidenavModule } from '../../../r-components/src/components/navigation/r-sidenav/r-sidenav.module';
import { RNavbarModule } from 'projects/r-components/src/components/navigation/r-navbar/r-navbar.module';
import { RLogoComponent } from './components/icons/r-logo.component';
import { RExpansionPanelModule } from 'projects/r-components/src/components/layout/expansion-panel';
import { RExpansionPanelListModule } from '../../../r-components/src/components/layout/expansion-panel-list';

function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

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
    RSidenavModule,
    RNavbarModule,
    RExpansionPanelModule,
    RExpansionPanelListModule
  ],
  // providers: [
  //   {
  //     provide: HIGHLIGHT_OPTIONS,
  //     useValue: {
  //       languages: getHighlightLanguages()
  //     }
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
