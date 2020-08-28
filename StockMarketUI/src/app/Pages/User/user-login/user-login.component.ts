import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from '@angular/forms';
import {Token} from '../../../Models/token';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  Username:string;
  Password:string;
  itemForm:FormGroup;

  constructor(private accountservice:AccountService, private router:Router, private builder:FormBuilder) {
    localStorage.clear();
   }

  ngOnInit(): void {
    this.itemForm=this.builder.group({
      Username:[''],
      Password:['']});
  }

  Validate()
  {
    this.accountservice.ValidateUser(this.Username, this.Password).subscribe(res=>{
      if(res.Username ==this.Username)
      {
        localStorage.setItem('token',res.token)
      console.log(res)
      this.router.navigateByUrl('item');
      }
      else if(res.token==""||res.token==null)
      {
        console.log('Invalid Id');
      }
      else
      {
      localStorage.setItem('token',res.token)
      console.log(res)
      this.router.navigateByUrl('/app-user-landing');
      }
    })
  }
}
