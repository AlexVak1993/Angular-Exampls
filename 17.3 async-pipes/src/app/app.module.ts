import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsyncPipesComponent } from './async-pipes/async-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
