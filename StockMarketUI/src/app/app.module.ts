import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor} from "./error-interceptor";
import { ReactiveFormsModule, FormsModule } from'@angular/forms';
import {AuthInterceptor} from './auth-interceptor';

import {ChartsModule} from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Pages/User/signup/signup.component';
import { ComparisonChartsComponent } from './Pages/User/comparison-charts/comparison-charts.component';
import { ChartComponent } from './Pages/User/chart/chart.component';
import { ImportStockComponent } from './Pages/Admin/import-stock/import-stock.component';
import { ManageCompanyComponent } from './Pages/Admin/manage-company/manage-company.component';
import { NewCompanyComponent } from './Pages/Admin/new-company/new-company.component';
import { AdminLoginComponent } from './Pages/Admin/admin-login/admin-login.component';
import { AdminLandingComponent } from './Pages/Admin/admin-landing/admin-landing.component';
import { UserLandingComponent } from './Pages/User/user-landing/user-landing.component';
import { UserLoginComponent } from './Pages/User/user-login/user-login.component';
import { AdminService } from './Services/admin.service';
import { UserService } from './Services/user.service';
import { ExcelService } from './Services/excel.service'
import { AccountService } from'./Services/account.service';
import { UpdateIPOComponent } from './Pages/Admin/update-ipo/update-ipo.component';
import { UpdateCompanyComponent } from './Pages/Admin/update-company/update-company.component';
import { RouterModule } from '@angular/router';
import { GetipoComponent } from './Pages/User/getipo/getipo.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { NewIPOComponent } from './Pages/Admin/new-ipo/new-ipo.component';
import { ManageIPOComponent } from './Pages/Admin/manage-ipo/manage-ipo.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ComparisonChartsComponent,
    ChartComponent,
    ImportStockComponent,
    ManageCompanyComponent,
    NewCompanyComponent,
    AdminLoginComponent,
    AdminLandingComponent,
    UserLandingComponent,
    UserLoginComponent,
    UpdateIPOComponent,
    UpdateCompanyComponent,
    GetipoComponent,
    HomeComponent,
    NotFoundComponent,
    NewIPOComponent,
    GetipoComponent,
    ManageIPOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  exports:[ RouterModule ],
  providers: [AdminService, UserService, ExcelService, AccountService
    //,{
     // provide: HTTP_INTERCEPTORS,
    //  useClass: ErrorInterceptor,
     // multi: true
   // }
    , {
    provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule {  }