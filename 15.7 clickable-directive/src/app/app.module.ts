import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickableDirectiveComponent } from './clickable-directive/clickable-directive.component';
import { MyClickableDirective } from './my-clickable.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClickableDirectiveComponent,
    MyClickableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
