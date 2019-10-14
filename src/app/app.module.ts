import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule,HttpRequest,HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from './auth.service';
import { LoginService } from './login/login.service';
import {JwtModule} from '@auth0/angular-jwt';
import { TokenInterceptor } from './TokenInterceptor';
import { HomeService } from './home/home.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestiondesigningComponent } from './questiondesigning/questiondesigning.component';
import { SurveyService } from './SharedService/SurveyService.service';
import { QuestionService } from './SharedService/QuestionService.service';
import { ManagesurveyComponent } from './managesurvey/managesurvey.component';
import { AnonymossurveyComponent } from './anonymossurvey/anonymossurvey.component';
import { AuthGuardService } from './auth-guard.service';
import { AnonymousService } from './anonymossurvey/anonymossurvey.service';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { RouterModule } from '@angular/router';

export function JwtoptionsFactory(storeage) {
  return {
    tokenGetter:() => {
      return localStorage.get('token');
    }
  }
} 

export function tokenGetter(){
  return localStorage.get('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    QuestiondesigningComponent,
    ManagesurveyComponent,
    AnonymossurveyComponent
  ],
  imports: [
    BrowserModule,    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,   
   JwtModule.forRoot({
      config:{
        tokenGetter :tokenGetter
      }
    }) 
  ],
  providers: [AuthGuardService,AuthService,LoginService,HomeService,SurveyService,QuestionService,AnonymousService,
    {
     provide:HTTP_INTERCEPTORS,
     useClass:TokenInterceptor,
     multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
