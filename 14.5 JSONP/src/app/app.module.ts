import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonpComponent } from './jsonp/jsonp.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    JsonpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Модуль для работы @angular/common/http
    HttpClientJsonpModule //Модуль для работы @angular/common/http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
