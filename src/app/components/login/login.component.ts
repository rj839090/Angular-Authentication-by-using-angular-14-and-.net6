import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router:Router) {

     }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required]
    })
  }
  onLogin(loginForm:any){
    
    if(loginForm.valid){
      console.log(loginForm.value)
      this.authService.login(loginForm.value).subscribe({
        next:(res=>{
          alert(res.message)
          this.authService.storeToken(res.token)
          this.router.navigate(['dashboard'])
        }),
        
      }
    )}else{

    }
  }
}
