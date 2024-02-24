import { DatePipe, NgFor, Time } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable, filter, from, interval, map } from 'rxjs';
import { StudentService } from '../student/student.service';
import { Student } from '../student/student.model';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
})
export class ObservableComponent {
  students: Student[] =this._studentService. getStudent();
  time: string;
  time1: string;
  email:string;
  email2:string;
  s:string;
  sendemail: Observable<string> = new Observable((s) => {
    this.students.forEach(element => {
      if(element.active)
       s.next(element.famalyName+"@gmail.com");
    });
  }
  )
  sendemail1: Observable<Student> =  from(this.students).pipe(filter(s => 
 s.active))
  student: Observable<string> =  from(this.students).pipe(
    map(s => s.name));
    timer: Observable<Date> = new Observable((observer) => {
      setInterval(() => {
        observer.next(new Date())
      }, 1000)
    }
    )
 student1: Observable<string> = new Observable((s) => {
    this.students.forEach(element => {
      s.next(element.name)
    });
  }
  )
  timerByObserver: Observable<Date> = interval(1000).pipe(map (t => {
    return new Date();
  }))
  source: Observable<string> = new Observable((o) => {

  })
  sendMail(){

    this.sendemail.subscribe((val: string) => {
      console.log("sss")
      this.email+=(val)
    })
    this.sendemail1.pipe(map(s=>s.famalyName+"@gmail.com")).subscribe((val: string) => {
      console.log("sss")
      this.email+=(val)
    })
    
  }
  constructor(private _studentService:StudentService) {
    this.source.subscribe((val: string) => {
      console.log(val);
    })
    this.timer.pipe(map(x=>x.toLocaleTimeString())).subscribe((val: string) => {
      this.time = val;
    })
    this.timerByObserver.pipe(map(x=>x.toLocaleTimeString())).subscribe((val: string) => {
      this.time1 =val;
    })
    this.student.subscribe((val: string) => {
      console.log(val)
    })
    this.student1.subscribe((val: string) => {
      console.log(val)
    })
  }
}



