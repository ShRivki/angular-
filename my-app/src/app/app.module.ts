import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Student } from './modules/student/student.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFromMdComponent } from './modules/student/student-from-md/student-from-md.component';
import { TestListComponent } from './modules/student/test-list/test-list.component';
import { StudentService } from './modules/student/student.service';
import { ObservableComponent } from './modules/observable/observable.component';
import{HttpClientModule}from "@angular/common/http";

import {Route,RouterModule}from "@angular/router"
import { ListStudentsComponent } from './modules/student/list-students/list-students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentModule } from './modules/student/student.module';
import { StudentDetailsComponent } from './modules/student/student-details/student-details.component';
import { LoginService } from './modules/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StudentDetailsComponent,
  ],
  imports: [
    BrowserModule,FormsModule,StudentModule,AppRoutingModule],
  providers: [StudentService,LoginService],

  bootstrap: [AppComponent]
})
export class AppModule { }
