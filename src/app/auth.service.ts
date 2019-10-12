import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt"

@Injectable()
export class AuthService {

  constructor(private jwtHelper : JwtHelperService) { }

  public isAuthenticated() : boolean {
    const token =  localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public getToken() : string {
    return localStorage.getItem('token');
  }

  public setToken(token : string) {
     localStorage.setItem('token',token);
  }

  public removeToken(token : string) {
    localStorage.removeItem('token');
 }

}
