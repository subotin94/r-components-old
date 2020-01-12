import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RButtonModule, RAlertModule } from '../../../r-components/src/public-api';
import { RIconModule } from '../../../r-components/src/components/icons/r-icon/r-icon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RButtonModule,
    RAlertModule,
    RIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
