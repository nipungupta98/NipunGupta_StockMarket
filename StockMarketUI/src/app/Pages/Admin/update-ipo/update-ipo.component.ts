import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/Models/ipo';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIPOComponent implements OnInit {

  itemForm:FormGroup;
  CompanyName = localStorage.getItem("CompanyName")
  PricePerS;
  StockExs;
  TotalShares;
  OpenTime;
  Remarks;

  ipo:IPO;

  constructor(private builder:FormBuilder,private adminservice:AdminService, private router:Router) {
   }
    ngOnInit() {
      this.itemForm=this.builder.group({
        StockExs:[''],
        Remarks:[''],
        PricePerS:[''],
        TotalShares:[''],
        OpenTime:['']
      });
    }
    logout()
    {
      localStorage.removeItem('token');
      localStorage.removeItem('ROLE');      
      this.router.navigateByUrl('/app-home')
    }
  Update()
  {
    this.ipo = new IPO;
    this.ipo.IPOID = localStorage.getItem("UpdateIPO");
    this.ipo.CompanyName = localStorage.getItem("CompanyName")
    this.ipo.StockExs=this.itemForm.value["StockExs"];
    this.ipo.Remarks=this.itemForm.value["Remarks"];
    this.ipo.PricePerS=Number(this.itemForm.value["PricePerS"])
    this.ipo.TotalShares=Number(this.itemForm.value["TotalShares"])
    this.ipo.OpenTime=this.itemForm.value["OpenTime"];
    
    console.log(this.ipo);
    this.adminservice.UpdateIPO(this.ipo).subscribe(res=>{
      console.log('Record Updated')
    })

    window.alert(`Company ${this.ipo.CompanyName} updated`)
    this.router.navigateByUrl('/app-manage-ipo')
  }
}