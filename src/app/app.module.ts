import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlatsModule } from '../flats/flats.module';
import { BackendModule } from '../backend/backend.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlatsModule,
    BackendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
