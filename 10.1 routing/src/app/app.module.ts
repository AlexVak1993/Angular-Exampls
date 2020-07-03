import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhraseDetailComponent } from './phrase-detail/phrase-detail.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhraseDetailComponent,
    PhraseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
