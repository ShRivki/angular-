import { Component } from '@angular/core';
import { Student } from './modules/student/student.model';
import { StudentService } from './modules/student/student.service';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titel:string ="hello";
  D:Date=new Date();
  t:number=this.D.getHours();
  s:string=this.getTime();
  getTime(){
    time:
    if (this.t<12)
    return "good morning";
    else if(this.t<18)
    {
      return"good afternoom";
    }
    return "good night";
    

  }
  student:Student|undefined;
  total:number;
 // if (student) {
 //   this.total= this._studentService.getMissingDays(this.student.id);
 // }

 // constructor(private _studentService:StudentService){}
  tachTest(s:Student)
  {
    this.student=s;

  }
}
