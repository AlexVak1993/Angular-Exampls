import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsercatdDirectiveComponent } from './usercatd-directive/usercatd-directive.component';
import { UserCardDirective } from './user-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsercatdDirectiveComponent,
    UserCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
