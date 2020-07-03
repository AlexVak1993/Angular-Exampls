import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { Counter1Component } from './counter1/counter1.component';
import { Counter2Component } from './counter2/counter2.component';
import { Counter3Component } from './counter3/counter3.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterListComponent,
    Counter1Component,
    Counter2Component,
    Counter3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
