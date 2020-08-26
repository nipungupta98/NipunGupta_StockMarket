import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from'@angular/forms';

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
    UpdateCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[ RouterModule ],
  providers: [AdminService, UserService, ExcelService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
