import { Component, OnInit } from '@angular/core';
import { Company } from '../../../Models/company';
import { FormBuilder,FormGroup } from "@angular/forms";
import { AdminService} from '../../../Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  company:Company;
  itemForm:FormGroup;

    CompanyCode;
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
        CompanyCode:[''],
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
  Add()
  {
    this.company=new Company();
    this.company.CompanyCode=this.itemForm.value["CompanyCode"];
    this.company.CompanyName=this.itemForm.value["CompanyName"];
    this.company.Turnover=this.itemForm.value["Turnover"];
    this.company.CEO=this.itemForm.value["CEO"];
    this.company.BoardofDirectors=this.itemForm.value["BoardofDirectors"];
    this.company.StockExs = this.itemForm.value["StockExs"];
    this.company.Sector=this.itemForm.value["Sector"];
    this.company.IPOID=this.itemForm.value["IPOID"];
    this.company.Writeup=this.itemForm.value["Writeup"];

    console.log(this.company);
    this.service.AddCompany(this.company).subscribe(res=>{
      console.log('Record Added')
    })

    this.router.navigateByUrl('/app-manage-company')
  }
}