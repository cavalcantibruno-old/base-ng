import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './views/security/login/auth.guard';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/security/login/login.component';
import { UserNewComponent } from './views/user/user-new/user-new.component';
import { UserListComponent } from './views/user/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserNewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
