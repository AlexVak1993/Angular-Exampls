import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChainingPipesComponent } from './chaining-pipes/chaining-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ChainingPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
