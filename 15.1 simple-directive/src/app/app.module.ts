import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleDirectiveComponent } from './simple-directive/simple-directive.component';
import { MyColorDirective } from './my-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDirectiveComponent,
    MyColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
