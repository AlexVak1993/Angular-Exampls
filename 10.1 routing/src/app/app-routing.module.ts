import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { PhraseDetailComponent } from './phrase-detail/phrase-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'phrases', component: PhraseListComponent},
  {path: 'phrase/:id', component: PhraseDetailComponent}
  // id - специалная переменная в маршруте, к которой можно обратиться в компоненте PhraseDetailComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
