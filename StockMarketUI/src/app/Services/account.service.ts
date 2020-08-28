import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from '../Models/user'
import { Token } from '../Models/token';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  path:string = "http://localhost:51926/Account/"


  constructor(private http:HttpClient) {}

  public AddUser(user:User):Observable<Token>
  {
    return this.http.post<Token>(this.path+'AddUser',user);
  }
  public ValidateUser(Username:string, Password:string):Observable<Token>
  {
      return this.http.get<Token>(this.path +  'ValidateUser/' + Username + '/' + Password)
  }

  public ValidateAdmin(Username:string, Password:string):Observable<Token>
  {
      return this.http.get<Token>(this.path +  'ValidateAdmin/' + Username + '/' + Password)
  }
}
