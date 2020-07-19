import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MydelayDirectiveComponent } from './mydelay-directive/mydelay-directive.component';
import { MyDelayDirective } from './my-delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    MydelayDirectiveComponent,
    MyDelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
