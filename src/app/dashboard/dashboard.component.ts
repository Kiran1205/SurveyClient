import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { SurveyService } from '../SharedService/SurveyService.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username = '';
  formcountdisplay : any;
  surveyForm: FormGroup;
  constructor(private builder :FormBuilder,
    private router : Router,
    private surveyService : SurveyService) { }

  ngOnInit() {
    this.username =  localStorage.getItem('username');
    this.surveyForm = this.builder.group({
      SurveyName: ['',Validators.required],
      SurveyDesc: ['',Validators.required],
      OwnerId : localStorage.getItem('userid'),
      ExpDate:['',Validators.required]
    });
  }
  
  OnSurveyCreate(){
    
  }
  CreateSurvey(){
    
    this.surveyService.create(this.surveyForm.value).subscribe((result : any ) =>{    

      this.router.navigate(['questiondes'], result.id);
      
    },(error : HttpResponse<any>) => {
        if(error.status == 401)
        {
         // this.errorMessage ="Login failed.please try again.";
        }
        else{
          //this.errorMessage ="Unabe to Process request";
        }
    });
   
  }

}
