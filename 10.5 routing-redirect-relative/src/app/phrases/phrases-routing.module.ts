import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { PhraseDetailComponent } from './phrase-detail/phrase-detail.component';

//Определение маршрутов для feature модуля
const routes: Routes = [
  {path: 'phrases', component: PhraseListComponent},
  {path: 'phrases/:id', component: PhraseDetailComponent}
];

//Используем методя forChild, потому что forRoot используется только в AppModule
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
