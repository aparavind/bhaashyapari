import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BhaashyaPariComponent } from './bhaashya-pari/bhaashya-pari.component';
import { CKEditorModule } from 'ngx-ckeditor';


@NgModule({
  declarations: [
    AppComponent,
    BhaashyaPariComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
