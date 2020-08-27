import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Company} from '../Models/company'

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

  public GetCompany(CompanyCode:string):Observable<Company>{
    return this.http.get<Company>(this.path + "GetCompany/" + CompanyCode)
  }

  public AddCompany(company:Company):Observable<any>
  {
    return this.http.post(this.path+'AddCompany',company);
  }
}