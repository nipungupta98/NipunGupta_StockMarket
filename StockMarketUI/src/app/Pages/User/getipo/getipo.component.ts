import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { IPO } from 'src/app/Models/ipo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getipo',
  templateUrl: './getipo.component.html',
  styleUrls: ['./getipo.component.css']
})
export class GetipoComponent implements OnInit {

  IPOs:IPO[];
  ipo:IPO;

  constructor(private adminservice: AdminService, private router:Router) {
   }

  ngOnInit(): void {
    this.GetAllIPOs()
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('ROLE');    
    
    this.router.navigateByUrl('/app-home');
  }
  GetAllIPOs(){
    this.adminservice.GetAllIPOs().subscribe(res=>{
      this.IPOs = res;
      console.log(this.IPOs)
    })
  }
}
