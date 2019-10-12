import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username = '';
  formcountdisplay : any;
  surveyForm: FormGroup;
  constructor(private builder :FormBuilder,private router : Router) { }

  ngOnInit() {
    this.username =  localStorage.getItem('username');
    this.surveyForm = this.builder.group({
      SurveyName: ['',Validators.required],
      SurveyDescription: ['',Validators.required],
      userid:1
    });
  }
  OnSurveyCreate(){
    
  }
  CreateSurvey(){
    console.log(this.surveyForm.value);
    this.router.navigate(['questiondes']);
  }

}
