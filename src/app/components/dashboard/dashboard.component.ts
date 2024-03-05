// 

import { state, style, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UserstoreService } from "src/app/services/userstore.service";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
 
})
export class DashboardComponent implements OnInit {

  
  public role!:string;

  public fullName : string = "";
  constructor( private auth: AuthService, private userStore: UserstoreService) { }

  ngOnInit() {
   

    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      const fullNameFromToken = this.auth.getFullNameFromTOken();
      this.fullName = val || fullNameFromToken
    });

    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromTOken();
      this.role = val || roleFromToken;
    })
  }
  logout(){
    this.auth.signOut();
  }
 

  
}