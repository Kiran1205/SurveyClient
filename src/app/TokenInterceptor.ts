import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
 constructor(private authService : AuthService,private router :Router){

 }

 intercept(request : HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    console.log("test");
     request = request.clone({
        setHeaders :{
            Authorization :`Bearer ${this.authService.getToken()}`         
            
        }
        
     });
     return next.handle(request).pipe(
         tap(
            error => this.handleError(request, error)
         ));
 }

 handleError(req: HttpRequest<any>, event) {
    if(event.error instanceof HttpErrorResponse){
        if(event.error.status == 401){
            this.router.navigate(['login']);
        }
    }
  }
}