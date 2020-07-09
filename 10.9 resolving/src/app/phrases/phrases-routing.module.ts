import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhraseListComponent } from './phrase-list/phrase-list.component';
import { PhraseDetailComponent } from './phrase-detail/phrase-detail.component';
import { CanDeactivateGuardService } from '../shared/can-deactivate-guard.service';
import { PhraseDetailResolveService } from '../shared/phrase-detail-resolve-service.service';

//Определение маршрутов для feature модуля
const routes: Routes = [
  { path: 'phrases', component: PhraseListComponent },
  {
    path: 'phrase/:id', component: PhraseDetailComponent,
    canDeactivate: [CanDeactivateGuardService],
    //Свойство позволяет определить обьект, который будет доступен в ActivatedRoute
    resolve: {phrase: PhraseDetailResolveService}
  }
];

//Используем методя forChild, потому что forRoot используется только в AppModule
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhrasesRoutingModule { }
