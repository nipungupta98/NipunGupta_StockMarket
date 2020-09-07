import { Component, OnInit } from '@angular/core';
import { StockPrice } from 'src/app/Models/stock-price';
import {ExcelService} from '../../../Services/excel.service'
import { Company } from 'src/app/Models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  StockPriceData=[]
  Companies:Company[]

  company1 = localStorage.getItem('company1').split(",")[1]
  company2 = localStorage.getItem('company2').split(",")[1]

  company1ID = localStorage.getItem('company1').split(",")[0]
  company2ID = localStorage.getItem('company2').split(",")[0]

  company1data=[]
  company2data=[]
  times = []

  LineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public LineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'];
  public LineChartType = 'line';
  public LineChartLegend = true;


  public LineChartData = [
    {data: this.company1data, label: this.company1},
    {data: this.company2data, label: this.company2}
  ];

  constructor(private excelservice:ExcelService, private router:Router) {
   }

  ngOnInit(): void {

    this.excelservice.GetChartData(this.company1ID).subscribe(e=>{
      this.company1data = e;
      this.plot(this.company1data, this.company2data, this.times)
    })

    this.excelservice.GetChartData(this.company2ID).subscribe(e=>{
      this.company2data = e;
      this.plot(this.company1data, this.company2data, this.times)
    })

    this.excelservice.GetChartTime(this.company1ID).subscribe(e=>{
      this.times = e;
      this.plot(this.company1data, this.company2data, this.times)
    })
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('ROLE')

    this.router.navigateByUrl('/app-home')
  }
  plot(company1data, company2data, times){

      this.LineChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };
  
    this.LineChartLabels = times;
    this.LineChartType = 'line';
    this.LineChartLegend = true;
  
  
    this.LineChartData = [
      {data: company1data, label: this.company1},
      {data: company2data, label: this.company2}
    ];
  }
}