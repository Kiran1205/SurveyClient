import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { SurveyService } from '../SharedService/SurveyService.service';
import { QuestionService } from '../SharedService/QuestionService.service';

@Component({
  selector: 'app-questiondesigning',
  templateUrl: './questiondesigning.component.html',
  styleUrls: ['./questiondesigning.component.scss']
})
export class QuestiondesigningComponent implements OnInit {

   
  orderForm: FormGroup;
  resultForm: FormGroup;
  savedQuestions: FormArray;    
  questions: FormArray;
  questionstype:any;
  btnvisble = false;
  surveyid:any;
  survey = {
    surveyName:'',
    surveyDesc:''
  };
  constructor(private formBuilder: FormBuilder,
              private router : Router,
              private surveyService : SurveyService,
              private questionService : QuestionService) {

              this.surveyid  = this.router.getCurrentNavigation().extras;
            
        }

  ngOnInit() {
  
    this.surveyService.GetBySurveyID(this.surveyid).subscribe((response : any ) =>{
      this.survey = response;
    });
 
    this.orderForm = this.formBuilder.group({     
      questions: this.formBuilder.array([])      
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
  createQuestions(): FormGroup {
    return this.formBuilder.group({
      id:0,
      ques: ['',Validators.required],
      questionType: ['',Validators.required],
      surveyId :this.surveyid,
      qoptions:this.formBuilder.array([this.createoptions(1)]),           
    });
  }
  createoptions(index) : FormGroup{
    return this.formBuilder.group({
      questionId:0,
      optionDetail: '',
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

   addoption(index):void{ 
    this.questions = this.orderForm.get('questions') as FormArray;
     var question = this.questions.controls[index] as FormGroup
     var opt = question.get('qoptions')  as FormArray;
     opt.push(this.createoptions(index));
  }
  removeoption(qindex,optindex ):void{ 
    this.questions = this.orderForm.get('questions') as FormArray;
     var question = this.questions.controls[qindex] as FormGroup
     var opt = question.get('qoptions')  as FormArray;
     opt.removeAt(optindex);
  }

  addQuestion(): void {
    this.questions = this.orderForm.get('questions') as FormArray;    
      this.questions.push(this.createQuestions());    
  }
  closeform(){
    this.questions.clear();
  }

  changedFieldType(index,e):void{
    this.btnvisble = true;
    this.questions = this.orderForm.get('questions') as FormArray;
    var question = this.questions.controls[index] as FormGroup
    var opt = question.get('qoptions')  as FormArray;
    if(opt.length == 0)  {
      this.addoption(index);
    }
  }
  deletequetion(index, questionId){
    this.savedQuestions = this.resultForm.get('questions') as FormArray;    
    this.questionService.remove(questionId).subscribe((response : any ) =>{
      this.savedQuestions.removeAt(index);
    });
  }
  SaveQuestionlocally(){
    var group = this.questions.controls[0] as FormGroup; 
    
    this.questionService.create(group.value).subscribe((response : any ) =>{
      
      this.savedQuestions = this.resultForm.get('questions') as FormArray;
      var formgroupupdate = this.updateQuestions(response) as FormGroup; 
      var opt = formgroupupdate.get('qoptions')  as FormArray;  
       response.qoptions.forEach(evertoption => {       
        opt.push(this.updateoptions(evertoption));
      });
      this.savedQuestions.push(formgroupupdate); 
    });

    this.questions.clear();
  }


  loaddata()  {
    
     this.questionService.GetById(this.surveyid).subscribe((response : any ) =>{    
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

  SaveSurvey(){
    this.surveyService.GetSurveyLink(this.surveyid).subscribe((response : any ) =>{      
      this.router.navigate(['survey'])
    });
  }  
}

