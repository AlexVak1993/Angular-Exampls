import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassingParamsComponent } from './passing-params/passing-params.component';
import { MyRepeatDirective } from './my-repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    PassingParamsComponent,
    MyRepeatDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
