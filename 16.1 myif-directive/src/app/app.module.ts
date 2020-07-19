import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyifDirectiveComponent } from './myif-directive/myif-directive.component';
import { MyIfDirectiveDirective } from './my-if-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyifDirectiveComponent,
    MyIfDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
