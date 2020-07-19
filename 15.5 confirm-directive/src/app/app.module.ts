import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmDirectiveComponent } from './confirm-directive/confirm-directive.component';
import { MyConfirmDirective } from './my-confirm.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDirectiveComponent,
    MyConfirmDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
