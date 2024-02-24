import { DaysOfAbsence } from "../../models/DaysOfAbsence.model";
import { Test } from "../../models/test.model";



export class Student{
  id?:number;
  // email?:string;
  name?:string="";
  famalyName?:string="";
  adress?:string="";
  pon?:number=0;
  avgMarks?:number=0;
  departure_date?:string="--";
  active?:boolean=true;
  year?:Year;
  route?:number;
  tests?:Test[];
  daysAbsence?:DaysOfAbsence[]

}
export enum Year {
  A = 1,
  B = 2,
  C = 3
}