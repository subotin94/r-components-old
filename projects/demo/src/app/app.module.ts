import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RButtonModule, RAlertModule } from '../../../r-components/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RButtonModule,
    RAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
