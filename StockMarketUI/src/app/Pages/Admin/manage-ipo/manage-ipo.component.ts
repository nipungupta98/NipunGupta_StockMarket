import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';
import { IPO } from 'src/app/Models/ipo';

@Component({
  selector: 'app-manage-ipo',
  templateUrl: './manage-ipo.component.html',
  styleUrls: ['./manage-ipo.component.css']
})
export class ManageIPOComponent implements OnInit {

  IPOs:IPO[];
  ipo:IPO;
  IPOID;

  constructor(private adminservice: AdminService, private router:Router) {
   }

  ngOnInit(): void {
    this.GetAllIPOs()
  }

  logout(){
    localStorage.clear()
    this.router.navigateByUrl('/app-home');
  }
  GetAllIPOs(){
    this.adminservice.GetAllIPOs().subscribe(res=>{
      this.IPOs = res;
      console.log(this.IPOs)
    })
  }
    Update(IPOID:string, CompanyName:string)
  {
    localStorage.setItem("UpdateIPO", IPOID)
    localStorage.setItem("CompanyName", CompanyName)
    this.router.navigateByUrl('app-update-ipo')
    }
}