import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../Services/admin.service'
import {Company} from '../../../Models/company'
import { FormBuilder,FormGroup } from "@angular/forms";


@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  Companies:Company[]
  company:Company;
  itemForm:FormGroup;

  constructor(private adminservice:AdminService, private builder:FormBuilder) {
    this.adminservice.GetAllCompanies().subscribe(com=>{
      this.Companies = com;
      console.log(this.Companies)
    })
   }
  ngOnInit(): void {
  }
}
