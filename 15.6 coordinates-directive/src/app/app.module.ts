import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoordinatesDirectiveComponent } from './coordinates-directive/coordinates-directive.component';
import { MyCoordinatesDirective } from './my-coordinates.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoordinatesDirectiveComponent,
    MyCoordinatesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
