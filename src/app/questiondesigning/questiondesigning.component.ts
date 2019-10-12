import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-questiondesigning',
  templateUrl: './questiondesigning.component.html',
  styleUrls: ['./questiondesigning.component.scss']
})
export class QuestiondesigningComponent implements OnInit {

  visiblequestion = false;  
  orderForm: FormGroup;
  resultForm: FormGroup;
  savedQuestions: FormArray;    
  questions: FormArray;
  questionstype:any;
  btnvisble = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      questions: this.formBuilder.array([])      
    });
    this.resultForm = this.formBuilder.group({
      customerName: '',
      email: '',
      questions: this.formBuilder.array([])      
    });

  }

  createQuestions(): FormGroup {
    return this.formBuilder.group({
      question: ['',Validators.required],
      questiontype: ['',Validators.required],
      qoptions:this.formBuilder.array([this.createoptions(1)]),
           
    });
  }

  createoptions(index) : FormGroup{
    return this.formBuilder.group({
      question:index,
      opttext: '',
      selectedvalue: ''  
    });
  }
  getdropdownvalues(i){
     var questionse = this.resultForm.get('questions') as FormArray;
     var question = questionse.controls[i] as FormGroup;     
     var opt = question.get('qoptions')  as FormArray;     
     return opt.value;
  }
  checkoptiontype(questiontype,questioncat):boolean
  {
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
    if(opt.length == 0)
    {
      this.addoption(index);
    }
  }
  deletequetion(index){
    this.savedQuestions = this.resultForm.get('questions') as FormArray;  
    this.savedQuestions.removeAt(index);
  }
  SaveQuestionlocally(){
    this.savedQuestions = this.resultForm.get('questions') as FormArray;
    var group = this.questions.controls[0] as FormGroup;   
    this.savedQuestions.push(group);
    this.questions.clear();
  }
  SaveSurvey(){
    this.savedQuestions = this.resultForm.get('questions') as FormArray;
    if(this.savedQuestions.length  <=3){
      alert("Minimum three question required");
    }
    else{

    }
  }  
}

