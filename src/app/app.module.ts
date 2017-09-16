import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BhaashyaPariComponent } from './bhaashya-pari/bhaashya-pari.component';

@NgModule({
  declarations: [
    AppComponent,
    BhaashyaPariComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
