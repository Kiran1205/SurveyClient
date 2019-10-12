import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit,DoCheck{
  title = 'Survey Shrike';
  isAuthorized = false;
  

constructor(
  private router:Router,
  private authService :AuthService) {

}

  ngOnInit(){

  }

  ngDoCheck(){
    this.isAuthorized = this.authService.isAuthenticated();
    if(!this.isAuthorized && this.router.url!='/login'&& this.router.url!='/register' && this.router.url!='/home') 
    {
      this.router.navigate(['home']);
    }
  }
  

}