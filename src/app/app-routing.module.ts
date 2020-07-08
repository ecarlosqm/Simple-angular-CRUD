import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { PrivateComponent } from './private/private.component';
import { AuthGuard } from './auth.guard';
import { RedirectWhenAlreadyLoginGuard } from './guards/redirect_when_already_login/redirect-when-already-login.guard';
import { RegisterFormComponent } from './register-form/register-form.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [RedirectWhenAlreadyLoginGuard]
  },
  {
    path: 'signin',
    component: RegisterFormComponent,
    canActivate: [RedirectWhenAlreadyLoginGuard]
  },
  {
    path: 'home',
    component: PrivateComponent,
    canActivate:[AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }