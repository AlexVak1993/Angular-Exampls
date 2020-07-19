import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuiltinPipesComponent } from './builtin-pipes/builtin-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltinPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
