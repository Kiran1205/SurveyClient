import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { AnonymousService } from './anonymossurvey.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-anonymossurvey',
  templateUrl: './anonymossurvey.component.html',
  styleUrls: ['./anonymossurvey.component.scss']
})
export class AnonymossurveyComponent implements OnInit {
  
  resultForm: FormGroup;
  savedQuestions: FormArray; 
  surveyguid:any;
  valid = true;
  survey = {
    surveyName:'',
    surveyDesc:''
  };
  constructor(private router:Router,
               private route: ActivatedRoute,
               private formBuilder: FormBuilder,              
              private anonymousService : AnonymousService) {    
              this.route.queryParams.subscribe(params => {
               
              this.surveyguid = params['survey']; 
               
        });
  }

  ngOnInit() {
    document.getElementById("navbarid").hidden = true;
    this.anonymousService.GetSurveInfo(this.surveyguid).subscribe((response : any ) =>{
      this.survey = response;
    },(error : HttpResponse<any>) => {
     this.valid = false;
    });

    this.resultForm = this.formBuilder.group({
      questions: this.formBuilder.array([])      
    });
    this.loaddata();
  }
  updateQuestions(questionerver): FormGroup {
    return this.formBuilder.group({
      id:questionerver.id,
      ques: questionerver.ques,
      questionType:questionerver.questionType,      
      surveyId :questionerver.surveyId,
      qoptions:this.formBuilder.array([]),           
    });
  }
  updateoptions(element) : FormGroup{
    return this.formBuilder.group({
      questionId:element.questionId,
      optionDetail: element.optionDetail,
      selectedvalue: ''  
    });
  }
  getdropdownvalues(i){
    var questionse = this.resultForm.get('questions') as FormArray;
    var question = questionse.controls[i] as FormGroup;     
    var opt = question.get('qoptions')  as FormArray;     
    return opt.value;
 }
 checkoptiontype(questiontype, questioncat):boolean  {
  if(questiontype == questioncat){     
     return true;
   }else{
     return false
   }    
 }
 loaddata()  {
    
  this.anonymousService.GetBySurveyQuestionsUID(this.surveyguid).subscribe((response : any ) =>{    
    response.forEach(element => {
    this.savedQuestions = this.resultForm.get('questions') as FormArray;
    var formgroupupdate = this.updateQuestions(element) as FormGroup;  
    
    var opt = formgroupupdate.get('qoptions')  as FormArray;   
     element.qoptions.forEach(evertoption => {       
      opt.push(this.updateoptions(evertoption));
    });
    this.savedQuestions.push(formgroupupdate); 
     
  });
});
 
}

SubmitSurvey(){
  console.log(this.resultForm.value);
}

}
