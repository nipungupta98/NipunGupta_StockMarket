import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Models/company';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  company:Company;
  itemForm:FormGroup;

    CompanyCode = localStorage.getItem("CompanyCode");
    CompanyName;
    Turnover;
    CEO;
    BoardofDirectors;
    Sector;
    StockExs;
    IPOID;
    Writeup;

  constructor(private builder:FormBuilder,private service:AdminService, private router:Router) {
   }
    ngOnInit() {
      this.itemForm=this.builder.group({
        CompanyName:[''],
        Turnover:[''],
        CEO:[''],
        BoardofDirectors:[''],
        Sector:[''],
        StockExs:[''],
        IPOID:[''],
        Writeup:['']
      });
    }
    logout()
    {
      localStorage.clear()
      this.router.navigateByUrl('/app-home')
    }
  Update()
  {
    this.company=new Company();
    this.company.CompanyCode = localStorage.getItem("CompanyCode");
    this.company.CompanyName=this.itemForm.value["CompanyName"];
    this.company.Turnover=this.itemForm.value["Turnover"];
    this.company.CEO=this.itemForm.value["CEO"];
    this.company.BoardofDirectors=this.itemForm.value["BoardofDirectors"];
    this.company.StockExs = this.itemForm.value["StockExs"];
    this.company.Sector=this.itemForm.value["Sector"];
    this.company.IPOID=this.itemForm.value["IPOID"];
    this.company.Writeup=this.itemForm.value["Writeup"];

    console.log(this.company);
    this.service.UpdateCompany(this.company).subscribe(res=>{
      console.log(res)
      console.log('Record Updated')
    })

    window.alert(`Company ${this.CompanyName} updated`)

    this.router.navigateByUrl('/app-manage-company')
  }
}