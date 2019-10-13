import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { HttpResponse } from '@angular/common/http';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  errorMessage = '';
  
  constructor(private builder :FormBuilder,
    private router : Router,
    private loginService : LoginService) { 

    }

  ngOnInit() {
    this.registerForm = this.builder.group({
      firstname :['',Validators.required],
      lastname :['',Validators.required],
      password :['',Validators.required],
      username :['',Validators.required],
      email:['',Validators.required],
    });
  }
  
  onRegister()  {

    if(!this.registerForm.valid)
        return;

      this.errorMessage ='';

      this.loginService.register(this.registerForm.value).subscribe((result : any ) =>{
       
        alert("Please  login to access your account");
        this.router.navigate(['login']);
        
      },(error : HttpResponse<any>) => {
          if(error.status == 401)
          {
            this.errorMessage ="Login failed.please try again.";
          }
          else{
            this.errorMessage ="Unabe to Process request";
          }
      });

  }
  

}
