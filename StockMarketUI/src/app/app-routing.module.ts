import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageCompanyComponent} from './Pages/Admin/manage-company/manage-company.component';
import {UserLoginComponent} from './Pages/User/user-login/user-login.component';
import {AdminLoginComponent} from './Pages/Admin/admin-login/admin-login.component';
import {SignupComponent} from './Pages/User/signup/signup.component';
import { AdminLandingComponent } from './Pages/Admin/admin-landing/admin-landing.component';
import { UserLandingComponent } from './Pages/User/user-landing/user-landing.component';
import { NewCompanyComponent } from './Pages/Admin/new-company/new-company.component';

const routes: Routes = [
  {path: 'app-manage-company', component:ManageCompanyComponent},
  {path: 'app-user-login', component:UserLoginComponent},
  {path: 'app-admin-login', component:AdminLoginComponent},
  {path: 'app-signup', component:SignupComponent},
  {path: 'app-admin-landing',component:AdminLandingComponent},
  {path: 'app-user-landing', component:UserLandingComponent},
  {path: 'app-new-company', component:NewCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }