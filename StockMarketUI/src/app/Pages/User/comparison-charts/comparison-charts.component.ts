import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArrayName, FormBuilder } from '@angular/forms';
import { ExcelService } from 'src/app/Services/excel.service';
import { AdminService } from 'src/app/Services/admin.service';
import { Company } from 'src/app/Models/company';

@Component({
  selector: 'app-comparison-charts',
  templateUrl: './comparison-charts.component.html',
  styleUrls: ['./comparison-charts.component.css']
})
export class ComparisonChartsComponent implements OnInit {

  Companies:Company[];
  company1:string;
  company2:string;

  itemForm:FormGroup

  constructor(private router:Router, private excelservice:ExcelService, private adminservice:AdminService, private builder:FormBuilder) { }

  ngOnInit(): void {

    this.adminservice.GetAllCompanies().subscribe(com=>{
      this.Companies = com;
      console.log(this.Companies)

      this.itemForm=this.builder.group({
        company1:[''],
        company2:['']});
    })
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('ROLE')

    this.router.navigateByUrl('/app-home')
  }

  submit(){
    
    localStorage.setItem('company1', this.company1)
    localStorage.setItem('company2', this.company2)

    this.router.navigateByUrl('/app-chart')

  }

}
