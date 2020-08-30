import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import {User} from '../../../Models/user';
import { AccountService } from '../../../Services/account.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User;
  UserID;
  Password;
  Username;
  Email;
  Mobile;
  itemForm:FormGroup
  constructor(private builder:FormBuilder, private accountservice:AccountService, private router:Router) {
  }
  ngOnInit(): void {
    this.itemForm=this.builder.group({
      UserID:[''],
      Username:[''],
      Password:[''],
      Email:[''],
      Mobile:['']
    });
  }

  onSubmit() {
    this.Add();
  }
  Add(){
    this.user=new User();
    this.user.Username=this.itemForm.value["Username"];
    this.user.Password=this.itemForm.value["Password"];
    this.user.Email=this.itemForm.value["Email"];
    this.user.Mobile=this.itemForm.value["Mobile"]

    console.log(this.user);
    this.accountservice.AddUser(this.user).subscribe(res=>{
      localStorage.setItem('token',res.token)
      console.log('Record Added')

    })

    this.router.navigateByUrl('/app-user-landing');
  }
}