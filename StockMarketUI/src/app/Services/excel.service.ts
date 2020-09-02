import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {StockPrice} from '../Models/stock-price';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  path:string = "http://localhost:51926/Excel/"
  constructor(private http:HttpClient) {}

  public ImportStock(FileLink:string):Observable<StockPrice[]>
  {
    return this.http.get<StockPrice[]>(this.path + 'ImportStock/' + FileLink);
  }

  public GetData():Observable<StockPrice[]>{
    return this.http.get<StockPrice[]>(this.path + 'GetData')
  }
  public GetChartData(CompanyID:string):Observable<number[]>{
    return this.http.get<number[]>(this.path + 'GetChartData/'+CompanyID)
  }
}