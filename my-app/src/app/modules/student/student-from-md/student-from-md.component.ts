import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student, Year } from '../student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ROUTES } from '../../../models/route.model';
import { DaysOfAbsence } from '../../../models/DaysOfAbsence.model';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-from-md',
  templateUrl: './student-from-md.component.html',
  styleUrls:['./student-from-md.component.css']

})
export class StudentFromMdComponent {
Rotes=ROUTES;
year = Year;
private _student: Student|undefined;
public get student() : Student {
  return this._student;  
} 
@Input()
avg:number;
constructor(private _studentService:StudentService,private _act:ActivatedRoute){}
ngOnInit(): void {
  this._act.paramMap.subscribe(p=>{
  
  if(p.has("id")){
    this._studentService.getStudentsFromServer().subscribe(data => {
    this.student = data.filter(x=>x.id==+p.get("id"))[0];
    
  })}
  else
  this.student=new Student()

})  
}
@Input()
public set student (v : Student) {
  this._student = v;
  if(this._student !=undefined)
  {
    this.studentForm = new FormGroup(
      {
        "name": new FormControl(this.student.name, Validators.required),
        "famalyName": new FormControl(this.student.famalyName, Validators.required),
        "adress": new FormControl(this.student.adress, [Validators.minLength(3), Validators.required]),
        "pon": new FormControl(this.student.pon,[Validators.required,Validators.maxLength(10),Validators.minLength(9)]),
        "active": new FormControl(this.student.active, Validators.required),
        "avgMarks": new FormControl(this.student.avgMarks),
        "routeType": new FormControl(this.student.route,Validators.required),
        "year": new FormControl(this.student.year,  Validators.required),
      }
    )
    if(this.student?.id)
    this.total_absence_days=this._studentService.getMissingDays(this.student.id)

  } 
}
@Input()
total_absence_days:number=0; 
@Output()
saveNewStudent: EventEmitter<Student> = new EventEmitter();
countdays?:number; 
date?:Date;
absent: DaysOfAbsence;
studentForm: FormGroup= new FormGroup({});;
  save() {
  
    this.student.name=this.studentForm.controls["name"].value;
      this.student.pon=this.studentForm.controls["pon"].value;
      this.student.famalyName=this.studentForm.controls["famalyName"].value;
      this.student.adress=this.studentForm.controls["adress"].value;
      this.student.active=this.studentForm.controls["active"].value;
      this.student.avgMarks=this.studentForm.controls["avgMarks"].value;
      this.student.route=+this.studentForm.controls["routeType"].value;
      this.student.year= +this.studentForm.controls["year"].value;
      if (this.countdays&&this.date){
          this.absent={dateAbsence: this.date, days: this.countdays};
          this.student.daysAbsence?.push(this.absent);
          this.absent=undefined;
         this.date=undefined;
         this.countdays=undefined;
      }
      this.saveNewStudent.emit(this.student);
    
      
  }


}
