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
  { path:"home",component:HomeComponent ,pathMatch:'full'},
  { path:"login",component:LoginComponent,pathMatch:'full'},
  { path:"dashboard",component:DashboardComponent ,canActivate:[AuthGuard] },
  { path:"register",component:RegisterComponent,pathMatch:'full'},
  {path:"questiondes",component:QuestiondesigningComponent,canActivate:[AuthGuard]},
  {path:"survey",component:ManagesurveyComponent,canActivate:[AuthGuard]},
  {path:"anonymossurvey",component:AnonymossurveyComponent,pathMatch:'full'},
  { path:'',component:DashboardComponent,canActivate:[AuthGuard],pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
