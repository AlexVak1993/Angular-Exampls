import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { PhraseDetailComponent } from './phrase-detail/phrase-detail.component';


@NgModule({
  declarations: [PhraseListComponent, PhraseDetailComponent],
  imports: [
    CommonModule,
    PhrasesRoutingModule
  ]
})
export class PhrasesModule { }
