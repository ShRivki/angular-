import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Route,}from "@angular/router"
import { ListStudentsComponent } from "./modules/student/list-students/list-students.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import { NgModel } from "@angular/forms"
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './modules/student/student-details/student-details.component';
import { StudentFromMdComponent } from './modules/student/student-from-md/student-from-md.component';
import { AutoGuardService } from './modules/settings/auto-guard.service';
import { LoginComponent } from './modules/login/login.component';
var useid
const APP_ROUTES: Route[]=[
  { path:"students",component:ListStudentsComponent},
  { path:"home",component:HomeComponent},
  { path:"studentDetails/:id",component:StudentDetailsComponent},
  { path:"login",component:LoginComponent},  
  { path:"studentupdate/:id",component:StudentFromMdComponent},
  { path:"studentupdate",component:StudentFromMdComponent},
  {path:"settings",canActivate:[AutoGuardService], loadChildren:()=>import("./modules/settings/settings.module").then(m=>m.SettingsModule)},
  {path:"",redirectTo:"home", pathMatch:"full"} ,
  {path:"**",component:PageNotFoundComponent}//בסוף
]


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})



  export class AppRoutingModule{

  }