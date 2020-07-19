import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PurePipePipe } from './pure-pipe.pipe';
import { ImpurePipePipe } from './impure-pipe.pipe';
import { PureImpureComponent } from './pure-impure/pure-impure.component';

@NgModule({
  declarations: [
    AppComponent,
    PurePipePipe,
    ImpurePipePipe,
    PureImpureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
