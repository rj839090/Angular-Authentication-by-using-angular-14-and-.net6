import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "https://localhost:7042/api/User/"
  apiUrl:string="https://localhost:7042/api/User"

  userPayload:any;
  constructor(private http: HttpClient, private router: Router) { 
    this.userPayload=this.decodedToken();
  }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }
  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  }
  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['login'])
    // localStorage.removeItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  getUsers() {
    return this.http.get<any>(this.apiUrl)
  }


  decodedToken(){
    const jwtHelper=new JwtHelperService();
    const token=this.getToken()!;
    console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token);
  }


  getFullNameFromTOken(){
    if(this.userPayload){
      return this.userPayload.name
    }

  }
  getRoleFromTOken(){
    if(this.userPayload){
      return this.userPayload.role
    }
  }

}
