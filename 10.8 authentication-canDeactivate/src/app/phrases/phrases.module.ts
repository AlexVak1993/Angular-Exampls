import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { PhraseDetailComponent } from './phrase-detail/phrase-detail.component';
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [PhraseListComponent, PhraseDetailComponent, PhraseHomeComponent],
  imports: [
    CommonModule,
    PhrasesRoutingModule,
    FormsModule
  ]
})
export class PhrasesModule { }
