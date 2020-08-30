import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import {ExcelService} from '../../../Services/excel.service';
import {StockPrice} from '../../../Models/stock-price'
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-stock',
  templateUrl: './import-stock.component.html',
  styleUrls: ['./import-stock.component.css']

})
export class ImportStockComponent implements OnInit {
  FileLink:string;
  itemForm:FormGroup;
  StockPriceData:StockPrice[];

  constructor(private builder:FormBuilder,private excelservice:ExcelService,private router:Router) { }

  ngOnInit(): void {
      this.itemForm=this.builder.group({
        FileLink:['']});
  }

  logout()
  {
    localStorage.clear();
    this.router.navigateByUrl('/app-home');
  }

  onSubmit(){
    this.fetchFile();
  }

  fetchFile()
  {
      this.FileLink = this.itemForm.value["FileLink"]
      this.excelservice.ImportStock(this.FileLink).subscribe(res=>{
        this.StockPriceData = res;
        console.log(res)

        window.alert(`Summary of import:\n
        Company Code: ${res[0].CompanyCode}\n
        Number of Records: ${res.length}\n
        Stock Exchange: ${res[0].CompanyName}\n
        From: ${res[0].Date} to ${res[res.length-1].Date}`)
    })
  }
}