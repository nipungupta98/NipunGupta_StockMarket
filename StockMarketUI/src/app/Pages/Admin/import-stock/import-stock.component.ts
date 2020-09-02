import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import {ExcelService} from '../../../Services/excel.service';
import {StockPrice} from '../../../Models/stock-price'
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-import-stock',
  templateUrl: './import-stock.component.html',
  styleUrls: ['./import-stock.component.css']

})
export class ImportStockComponent implements OnInit {
  FileLink:string;
  itemForm:FormGroup;
  stockPriceData:StockPrice[];

  constructor(private builder:FormBuilder,private excelservice:ExcelService,private router:Router) {
   }

  ngOnInit(): void {
      this.itemForm=this.builder.group({
        FileLink:['']});
  }

  logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('ROLE');
    
    this.router.navigateByUrl('/app-home');
  }

  onSubmit(){
    this.fetchFile();
  }

  fetchFile()
  {
      this.FileLink = this.itemForm.value["FileLink"]
      this.excelservice.ImportStock(this.FileLink).subscribe(res=>{
        this.stockPriceData = res;

        window.alert(`Summary of import:\n
        Company Code: ${res[0].companyCode}\n
        Number of Records: ${res.length}\n
        Stock Exchange: ${res[0].companyName}\n
        From: ${res[0].date} to ${res[res.length-1].date}`)
    })    
  }
}