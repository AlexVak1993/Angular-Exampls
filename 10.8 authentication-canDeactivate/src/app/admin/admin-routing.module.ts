import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { AuthGuard } from '../shared/auth-guard.service'
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AuthGuard], //Если вернет false то маршрут не активируется
    children: [
      {
        path: '',
        children: [
          { path: 'phrases', component: ManagePhrasesComponent },
          { path: 'users', component: ManageUsersComponent },
          { path: '', redirectTo: 'phrases', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
