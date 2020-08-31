import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Company} from '../Models/company'
import {IPO} from '../Models/ipo'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  path:string = "http://localhost:51926/Admin/"
  constructor(private http:HttpClient) {}

  public GetAllCompanies( ):Observable<Company[]>
  {
    return this.http.get<Company[]>(this.path + "GetAllCompanies")
  }

  public GetCompany(CompanyCode:string):Observable<Company>
  {
    return this.http.get<Company>(this.path + "GetCompany/" + CompanyCode)
  }

  public AddCompany(company:Company):Observable<any>
  {
    return this.http.post(this.path+'AddCompany',company);
  }

  public DeleteCompany(CompanyCode:string):Observable<any>
  {
    return this.http.delete(this.path + 'DeleteCompany/' + CompanyCode);
  }
  public GetAllIPOs():Observable<IPO[]>
  {
    return this.http.get<IPO[]>(this.path+"GetAllIPOs")
  }
  public AddIPO(ipo:IPO):Observable<any>
  {
    return this.http.post(this.path+'AddIPO', ipo)
  }
  public UpdateIPO(ipo:IPO):Observable<any>
  {
    return this.http.put<any>(this.path+'UpdateIPO', ipo)
  }
  public UpdateCompany(company:Company):Observable<any>
  {
    return this.http.put<any>(this.path+'UpdateCompany', company)
  }
}