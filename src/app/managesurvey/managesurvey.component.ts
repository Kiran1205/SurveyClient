import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../SharedService/SurveyService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managesurvey',
  templateUrl: './managesurvey.component.html',
  styleUrls: ['./managesurvey.component.scss']
})
export class ManagesurveyComponent implements OnInit {
  userid:any;
  username:any;
  allSurveys :any;
  survey ={
    surveyName :''
  };
  surveylink ='';
  constructor(private surveyService: SurveyService,
    private router :Router) { }

  ngOnInit() {
    this.userid = localStorage.getItem('userid');
    this.username =  localStorage.getItem('username');
    this.loaddata();
  }
  loaddata(){
    this.surveyService.GetUserAllSurvey(this.userid).subscribe((response : any ) =>{
      this.allSurveys = response;
    });
  }
  deleteSurvey(surveyid){
    this.surveyService.remove(surveyid).subscribe((response : any ) =>{
     alert("record deleted sucessfully");
     this.loaddata();
    });
  }
  EditSurvey(surveyid){
    this.router.navigate(['questiondes'], surveyid);
  }
  GetSurveyLink(surveyid){
    this.surveyService.GetSurveyLink(surveyid).subscribe((response : any ) =>{
      this.survey = response;     
       this.surveylink ="anonymossurvey?survey="+response.surveyGuid;     
      
     });
  }

}
