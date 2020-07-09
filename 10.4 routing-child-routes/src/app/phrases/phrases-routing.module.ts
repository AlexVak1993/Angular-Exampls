import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { PhraseDetailComponent } from './phrase-detail/phrase-detail.component';
import { PhraseHomeComponent } from './phrase-home/phrase-home.component';

//Определение маршрутов для feature модуля
const routes: Routes = [
  { path: '', redirectTo: '/phrases', pathMatch: 'full' },
  //Для того что бы компонент отображался в router-outlet необходимо выполнить
  //настройку дочерних маршрутов с помощью свойства children
  {
    path: 'phrases', component: PhraseHomeComponent,
    children: [
      {
        path: '', component: PhraseListComponent,
        children: [
          { path: ':id', component: PhraseDetailComponent },
          { path: '', component: PhraseDetailComponent }
        ]
      }
    ]
  },
];

//Используем методя forChild, потому что forRoot используется только в AppModule
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
