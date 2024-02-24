import { NgModule } from "@angular/core";
import { ListStudentsComponent } from "./list-students/list-students.component";
import { StudentFromMdComponent } from "./student-from-md/student-from-md.component";
import { TestListComponent } from "./test-list/test-list.component";
import { ObservableComponent } from "../observable/observable.component";
import { StudentService } from "./student.service";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../../app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({

declarations:[ ListStudentsComponent,
    StudentFromMdComponent,
    TestListComponent,
    ObservableComponent
],
imports:[ CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule],
providers:[StudentService],
exports:[ListStudentsComponent,ObservableComponent,TestListComponent]

})
export class StudentModule{

}

