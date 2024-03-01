import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!:FormGroup;
  constructor(private fb:FormBuilder, private authService:AuthService,private router:Router) {
    
   }

  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  onSignUp(signUpForm:any){
        
    if(signUpForm.valid){
      console.log(signUpForm.value)
      this.authService.signUp(signUpForm.value).subscribe({
        next:(res=>{
          alert(res.message)
          signUpForm.reset();
          this.router.navigate(['login'])
        }),error:(err=>{
          alert(err.error.message)
        })
      })
    }else{

    }
  }
}
