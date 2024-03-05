import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public users:any = [];
  constructor(private auth: AuthService, ) { }

  ngOnInit(): void {
    this.auth.getUsers()
    .subscribe(res=>{
    this.users = res;
    });
  }

}
