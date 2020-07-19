import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventDirectiveComponent } from './event-directive/event-directive.component';
import { MyEventDirective } from './my-event.directive';

@NgModule({
  declarations: [
    AppComponent,
    EventDirectiveComponent,
    MyEventDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
