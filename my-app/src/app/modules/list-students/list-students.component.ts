import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student, Year } from '../student.model';
import { NgFor } from '@angular/common';
import { Test } from '../../models/test.model';
import { StudentService } from '../student.service';
import { DaysOfAbsence } from '../../models/DaysOfAbsence.model';
import { Subject, debounceTime, distinctUntilChanged, map, switchMap } from "rxjs";
@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
})
export class ListStudentsComponent {
  student:Student=undefined;
  @Input()
  absence_days: number
  @Output()
  outputStudentTest: EventEmitter<Student> = new EventEmitter();
  students: Student[];
  constructor(private _studentService: StudentService) {
    _studentService.getStudentsFromServer().subscribe(data => {
      this.students = data;
    })

  }
  selectStudent: Student | undefined;
  deleteStudent(student: Student) {
    let x = this.students.indexOf(student);
    this.students.splice(x, 1);
    this._studentService.deleteStudentToServer(student.id).subscribe(data => {
      if (data)
        alert("delete student");
    });
  }
  showDetails2(s:Student) {
    this.student= s;
  }
  showDetails(s: Student) {
    this.outputStudentTest.emit(s);
    this.selectStudent = s;
  }
  addStudent(student: Student) {
    let sUpdate = this.students.findIndex(x => x.id == student.id)
    if (sUpdate == -1) {
      // alert("add student");
      console.log("ddd")
      console.log(student)
      console.log("ddd")
      this._studentService.seveStudentToServer(student).subscribe(data => {
        if (data) {
          alert("add student");
          this.students.push(student);
        }
      },err=>{
        alert(err.data);
      });
    }
    else {
     
     alert("aaa")
      console.log(student.id);
      console.log(student+"eee")
      this._studentService.upDateStudentToServer(student.id, student).subscribe(data => {
        if (data) { 
          alert("wowwwww")
          this.students.splice(sUpdate, 1);
          alert("the detail update server");
          this.students.push(student);
          this.selectStudent = undefined;
          this.outputStudentTest.emit(this.selectStudent);
        }

      });

    }
  }
  getid(): number {
    var max = 0
    this.students.forEach(element => {
      if (element.id > max)
        max = element.id;
    });
    return max;
  }
  show() {
    this.selectStudent = new Student( //this.getid()+1, "name", "famalyname", "adress", 123456789,0,true,Year.A,1,null,[{dateAbsence:new Date(2023, 10, 13),days:0}]
    );
    this.outputStudentTest.emit(this.selectStudent);

  }
  ngOnInit() {
    this._studentService.getStudentPromise().then(data => {
      this.students = data;
    })
  }
  studentName: string = '';
  private searchTerms = new Subject<string>();

  // g(): void {
  //   while (true) {
      
    
  //     this.searchTerms.pipe(
  //         debounceTime(1000),
  //         distinctUntilChanged(),
  //         switchMap(() => this._studentService.getStudentFromSrverByNme(this.studentName)),
  //     ).subscribe(data => this.students = data);
  //   }
  // }
  getStudentByName(): void {
      this.searchTerms.next(this.studentName);
      this.searchTerms.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(() => this._studentService.getStudentFromSrverByNme(this.studentName)),
    ).subscribe(data => this.students = data);
  }
  showStudentByDone(done: boolean) {
    this._studentService.getStudentFromSrverByActive(done).subscribe(data => {
      this.students = data;
    })
  }
}
