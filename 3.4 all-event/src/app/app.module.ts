import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamplesComponent } from './samples/samples.component';
import { SampleItemComponent } from './sample-item/sample-item.component';
import { OuterComponent } from './outer/outer.component';

@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    SampleItemComponent,
    OuterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
