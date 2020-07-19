import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassingDataComponent } from './passing-data/passing-data.component';
import { MyColorChangeDirective } from './my-color-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    PassingDataComponent,
    MyColorChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
