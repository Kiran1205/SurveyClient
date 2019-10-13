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
  statistics = {
    openSurveys :0,
    closedSurveys:0,
    draftSurveys:0,
    totalResponse:0
  }
  userid:any;
  surveylist : any;
  constructor(private builder :FormBuilder,
    private router : Router,
    private surveyService : SurveyService) { }

  ngOnInit() {
    this.userid = localStorage.getItem('userid');
    this.username =  localStorage.getItem('username');
    this.surveyForm = this.builder.group({
      SurveyName: ['',Validators.required],
      SurveyDesc: ['',Validators.required],
      OwnerId : localStorage.getItem('userid'),
      ExpDate:['',Validators.required]
    });
    this.surveyService.GetStatistics(this.userid).subscribe((result : any ) =>{   
      this.statistics = result;
    });
    this.surveyService.GetLastTwoSurvey(this.userid).subscribe((result : any ) =>{
      console.log(result); 
      this.surveylist = result;
    });

  }
  navigatetoSurvey(){
    this.router.navigate(['survey']);
  }
  
  CreateSurvey(){    
    this.surveyService.create(this.surveyForm.value).subscribe((result : any ) =>{    
      console.log(result.id);
      this.router.navigate(['questiondes'], result.id);
      
    },(error : HttpResponse<any>) => {
      alert(error.statusText);
    });
   
  }

}
