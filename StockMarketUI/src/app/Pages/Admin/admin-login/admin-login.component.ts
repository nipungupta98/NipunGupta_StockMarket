import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { Router } from '@angular/router';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  Username:string;
  Password:string;
  itemForm:FormGroup;
  invalid=false;

  constructor(private accountservice:AccountService, private router:Router, private builder:FormBuilder) {
   }

  ngOnInit(): void {
    this.itemForm=this.builder.group({
      Username:[''],
      Password:['']});
  }
  Validate()
  {
    this.accountservice.ValidateAdmin(this.Username, this.Password).subscribe(res=>{
      if(res.Username ==this.Username)
      {
        localStorage.setItem('token',res.token)
      console.log(res)
      this.router.navigateByUrl('/app-admin-landing');
      localStorage.setItem('ROLE', 'ADMIN')
      }
      else if(res==null)
      {
        console.log('Invalid Id');
        this.invalid=true;
      }
      else
      {
      localStorage.setItem('token',res.token)
      console.log(res)
      this.router.navigateByUrl('/app-admin-landing');
      localStorage.setItem('ROLE', 'ADMIN')
      }
    })
  }
}