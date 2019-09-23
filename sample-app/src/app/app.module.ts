import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ProjectComponent } from './project/project.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    ProjectComponent,
    DateComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
