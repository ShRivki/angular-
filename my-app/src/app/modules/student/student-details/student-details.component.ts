import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',

})
export class StudentDetailsComponent implements OnInit{ 
  constructor(private _studentService: StudentService,private _act:ActivatedRoute ){}
  ngOnInit(): void {
    this._act.paramMap.subscribe(p=>{
    if(p.has("id")){
    this.studentId=+p.get("id");
    this._studentService.getStudentsFromServer().subscribe(data => {
      this.student = data.filter(x=>x.id==this.studentId)[0];
    })}
  })  
  }
  studentId:number
  student:Student
}
