import { Component, OnInit } from '@angular/core';
import { IPO } from 'src/app/Models/ipo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ipo',
  templateUrl: './new-ipo.component.html',
  styleUrls: ['./new-ipo.component.css']
})
export class NewIPOComponent implements OnInit {

  ipo:IPO;
  itemForm:FormGroup;

  CompanyName;
  PricePerS;
  StockExs;
  TotalShares;
  OpenTime;
  Remarks;

  constructor(private builder:FormBuilder,private adminservice:AdminService, private router:Router) {
   }
    ngOnInit() {
      this.itemForm=this.builder.group({
        CompanyName:[''],
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
  Add()
  {
    this.ipo=new IPO();
    this.ipo.CompanyName=this.itemForm.value["CompanyName"];
    this.ipo.StockExs=this.itemForm.value["StockExs"];
    this.ipo.Remarks=this.itemForm.value["Remarks"];
    this.ipo.PricePerS=parseFloat(this.itemForm.value["PricePerS"]);
    this.ipo.TotalShares=parseFloat(this.itemForm.value["TotalShares"]);
    this.ipo.OpenTime=this.itemForm.value["OpenTime"];
    
    console.log(this.ipo);
    this.adminservice.AddIPO(this.ipo).subscribe(res=>{
      console.log(res)
      console.log('Record Added')
    })

    window.alert(`Summary:\n 
    Company Name: ${this.ipo.CompanyName}\n
    Price Per Share: ${this.ipo.PricePerS}\n
    Total Shares:${this.ipo.TotalShares}`)

    this.router.navigateByUrl('/app-manage-ipo')
  }
}
