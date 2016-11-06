import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { StarterComponent }   from './starter.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [
    StarterComponent
  ],
  bootstrap: [ StarterComponent ]
})
export class AppModule { }