import { SamplesModule } from './samples/samples.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
