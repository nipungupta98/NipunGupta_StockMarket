import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageCompanyComponent} from './Pages/Admin/manage-company/manage-company.component';
import {UserLoginComponent} from './Pages/User/user-login/user-login.component';
import {AdminLoginComponent} from './Pages/Admin/admin-login/admin-login.component';
import {SignupComponent} from './Pages/User/signup/signup.component';
import { AdminLandingComponent } from './Pages/Admin/admin-landing/admin-landing.component';
import { UserLandingComponent } from './Pages/User/user-landing/user-landing.component';
import { NewCompanyComponent } from './Pages/Admin/new-company/new-company.component';
import {ChartComponent} from '../app/Pages/User/chart/chart.component';
import {ComparisonChartsComponent} from './Pages/User/comparison-charts/comparison-charts.component';
import {GetipoComponent} from './Pages/User/getipo/getipo.component';
import {NewIPOComponent} from '../app/Pages/Admin/new-ipo/new-ipo.component'
import {ImportStockComponent} from './Pages/Admin/import-stock/import-stock.component';
import {HomeComponent} from '../app/Pages/home/home.component';
import {NotFoundComponent} from '../app/Pages/not-found/not-found.component'
import {AuthGuard} from '../../src/app/Services/auth.guard';
import { UpdateCompanyComponent } from './Pages/Admin/update-company/update-company.component';
import { UpdateIPOComponent } from './Pages/Admin/update-ipo/update-ipo.component';
import {ManageIPOComponent} from '../app/Pages/Admin/manage-ipo/manage-ipo.component'

const routes: Routes = [
  {path: '',   redirectTo: '/app-home', pathMatch: 'full' },
  {path: 'app-manage-company', component:ManageCompanyComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'Admin'
  }},
  {path: 'app-user-login', component:UserLoginComponent},
  {path: 'app-admin-login', component:AdminLoginComponent},
  {path: 'app-signup', component:SignupComponent, 
  children:[{path:'app-user-landing', component: UserLandingComponent}]},
  {path: 'app-admin-landing',component:AdminLandingComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'Admin'
  }},
  {path: 'app-user-landing', component:UserLandingComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'User'
  }},
  {path: 'app-new-company', component:NewCompanyComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'Admin'
  }},
  {path: 'app-chart', component:ChartComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'User'
  }},
  {path: 'app-new-ipo', component:NewIPOComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'Admin'
  }},
  {path: 'app-update-company', component:UpdateCompanyComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'Admin'
  }},
  {path: 'app-update-ipo', component:UpdateIPOComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'Admin'
  }},
  {path: 'app-comparison-charts', component:ComparisonChartsComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'User'
  }},
  {path: 'app-getipo', component:GetipoComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'User'
  }},
  {path:'app-manage-ipo', component:ManageIPOComponent, canActivate:[AuthGuard], data: {
    Confirmed: 'Admin'
  }},
  {path: 'app-import-stock', component: ImportStockComponent, canActivate:[AuthGuard],data: {
    Confirmed: 'Admin'
  }},
  {path: 'app-home', component:HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }