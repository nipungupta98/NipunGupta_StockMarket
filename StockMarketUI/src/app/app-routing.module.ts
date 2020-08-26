import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageCompanyComponent} from './Pages/Admin/manage-company/manage-company.component';
import {UserLoginComponent} from './Pages/User/user-login/user-login.component';
import {AdminLoginComponent} from './Pages/Admin/admin-login/admin-login.component';
import {SignupComponent} from './Pages/User/signup/signup.component'

const routes: Routes = [
  {path: 'GetAllCompanies', component:ManageCompanyComponent},
  {path: 'UserLogin', component:UserLoginComponent},
  {path: 'AdminLogin', component:AdminLoginComponent},
  {path: 'Signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
