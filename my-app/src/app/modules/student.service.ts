import { Injectable, makeEnvironmentProviders } from "@angular/core";
import { Student, Year } from "./student.model";
import{DaysOfAbsence}from"../models/DaysOfAbsence.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
const STUDENTS=[
   
]
@Injectable()
export class StudentService{
    getStudent():Student[]{
    return STUDENTS;  
    }
    getStudentsFromServer():Observable<Student[]>{
       return this._http.get<Student[]>("/api/Students") 
    }
    getStudentPromise():Promise<Student[]>{
        return new Promise(res=>{
            setTimeout(()=>{
                res(STUDENTS);
            },3000)
            res(STUDENTS)
        })
    }
    getAvgById(id:number):number{
        var s=STUDENTS.find(x=>x.id==id);
        var count:Number;
        var marks=0;
        s.tests.forEach(t => {
            marks=marks+t.mark;
        });
        return marks/s.tests.length;
    }
   // getAvgById(id:number):Promise<number>{
   //     var s=STUDENTS.find(x=>x.id==id);
   //     return new Promise(res=>{
   //         var marks=0;
   //     s.tests.forEach(t => {
   //         marks=marks+t.mark;
   //     });
   //      res(marks/s.tests.length);
   //
   //     })
   //   new Date(2023, 10, 13)  
   // }
   getMissingDays(id:number):number{
    
        var sum:number=0;
        var s=STUDENTS.find(x=>x.id==id);
        s.daysAbsence.forEach(d=>{
        sum+=d.days;
        })
        return sum;
    }
    seveStudentToServer(student:Student):Observable<Student>{
        return this._http.post<Student>("/api/Students",{...student ,id:0})
    }
   getStudentFromSrverByActive(active:boolean):Observable<Student[]>{
    return this._http.get<Student[]>("/api/Students/active="+active)
   }
   getStudentFromSrverByNme(name:string):Observable<Student[]>{
    return this._http.get<Student[]>("/api/Students/name="+name)
   }
   upDateStudentToServer(id:number,student:Student):Observable<boolean>{
    alert("weef");
    return this._http.put<boolean>(`/api/Students/${id}`,{...student ,id:0});
}

deleteStudentToServer(id:number):Observable<boolean>{
    return this._http.delete<boolean>(`/api/Students/${id}`);
}
    constructor(private _http:HttpClient){

    }

}

