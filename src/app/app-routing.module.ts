import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestiondesigningComponent } from './questiondesigning/questiondesigning.component';
import { ManagesurveyComponent } from './managesurvey/managesurvey.component';
import { AnonymossurveyComponent } from './anonymossurvey/anonymossurvey.component';
import {   AuthGuardService as AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path:"home",component:HomeComponent  },
  { path:"login",component:LoginComponent},
  { path:"dashboard",component:DashboardComponent ,canActivate:[AuthGuard] },
  { path:"register",component:RegisterComponent},
  {path:"questiondes",component:QuestiondesigningComponent,canActivate:[AuthGuard]},
  {path:"survey",component:ManagesurveyComponent,canActivate:[AuthGuard]},
  {path:"anonymossurvey",component:AnonymossurveyComponent},
  { path:'',component:DashboardComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
