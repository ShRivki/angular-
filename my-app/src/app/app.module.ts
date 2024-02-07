import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Student } from './modules/student.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFromMdComponent } from './modules/student-from-md/student-from-md.component';
import { TestListComponent } from './modules/test-list/test-list.component';
import { StudentService } from './modules/student.service';
import { ObservableComponent } from './modules/observable/observable.component';
import{HttpClientModule}from "@angular/common/http";
import { StudentModule } from './modules/student.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,FormsModule,StudentModule],
  providers: [StudentService],

  bootstrap: [AppComponent]
})
export class AppModule { }
