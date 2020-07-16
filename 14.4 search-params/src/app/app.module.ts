import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchParamsComponent } from './search-params/search-params.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    SearchParamsComponent
  ],
  imports: [
    BrowserModule,
    //Для работы необходим HttpClientModule
    HttpClientModule,
    //HttpClientInMemoryWebApiModule перехватывает запрос
    //и возвращает смоделированный ответ сервера
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { apiBase: '/', delay: 1000 }
    ),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
