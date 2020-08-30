import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../Services/admin.service'
import {Company} from '../../../Models/company'
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  Companies:Company[];
  com:Company;

  constructor(private adminservice:AdminService, private router:Router) {
    
   }
  ngOnInit(): void 
  {
    this.GetAll()
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/app-home')
  }

  GetAll(){
    this.adminservice.GetAllCompanies().subscribe(com=>{
      this.Companies = com;
      console.log(this.Companies)
    })
  }
  Delete(CompanyCode:string)
  {
  this.adminservice.DeleteCompany(CompanyCode).subscribe(res=>{
    console.log('Record deleted');
    window.alert("Company Deleted")
    window.location.reload();
    this.router.navigateByUrl("/app-manage-company")
  })
}
Update(CompanyCode:string)
{
  localStorage.setItem('CompanyCode', CompanyCode);
  this.router.navigateByUrl('app-update-company')
}
}