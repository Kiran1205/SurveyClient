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
    OpenSurveys :0,
    ClosedSurveys:0,
    DraftSurveys:0,
    TotalResponse:0
  }
  userid:any;
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

  }
  
  OnSurveyCreate(){
    
  }
  CreateSurvey(){
    
    this.surveyService.create(this.surveyForm.value).subscribe((result : any ) =>{    

      this.router.navigate(['questiondes'], result.id);
      
    },(error : HttpResponse<any>) => {
      alert(error.statusText);
    });
   
  }

}
