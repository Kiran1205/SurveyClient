import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck{

  isAuthorized = false;
  username = ''
  constructor(
    private router:Router,
    private authService :AuthService) {
    
   }

  ngOnInit() {
    
  }

  OnLogOut()  {
    localStorage.removeItem('token');
  }
  
  ngDoCheck(){
    this.isAuthorized = this.authService.isAuthenticated();
  
      
  }

}
