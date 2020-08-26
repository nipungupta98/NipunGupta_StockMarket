import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import {User} from '../../../Models/user';
import { stringify } from 'querystring';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Password;
  Username;
  Email;
  Mobile;
  constructor() {
   }
  ngOnInit(): void {
  }
}