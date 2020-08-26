import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../Services/admin.service'
import {Company} from '../../../Models/company'

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  Companies:Company[]

  constructor(private adminservice:AdminService) {
    this.adminservice.GetAllCompanies().subscribe(i=>{
      this.Companies = i;
    })
   }

  ngOnInit(): void {
  }

}
