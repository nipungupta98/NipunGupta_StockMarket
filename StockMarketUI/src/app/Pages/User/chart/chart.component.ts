import { Component, OnInit } from '@angular/core';
import { StockPrice } from 'src/app/Models/stock-price';
import {ExcelService} from '../../../Services/excel.service'
import { Company } from 'src/app/Models/company';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  StockPriceData=[]
  Companies:Company[]

  company1:string
  company2:string

  company1ID:string
  company2ID:string

  company1data=[]
  company2data=[]

  data:StockPrice

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: this.company1data, label: this.company1},
    {data: this.company2data, label: this.company2}
  ];

  constructor(private excelservice:ExcelService, private router:Router) {
   }

  ngOnInit(): void {

    this.company1 = localStorage.getItem('company1').split(",")[1]
    this.company2 = localStorage.getItem('company2').split(",")[1]

    this.company1ID = localStorage.getItem('company1').split(",")[0]
    this.company2ID = localStorage.getItem('company2').split(",")[0]

    this.excelservice.GetData().subscribe(e=>{
      this.StockPriceData = e;

      this.StockPriceData.forEach(data=>
    {
      if(data.companyCode === this.company1ID){
        this.company1data.push(data.pricePerS)
      }
      else if(data.companyCode === this.company2ID){
        this.company2data.push(data.pricePerS)
      }
    })
    })
    console.log(this.company1data)
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('ROLE')

    this.router.navigateByUrl('/app-home')
  }
}