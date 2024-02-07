import { Component, Input } from '@angular/core';
import { Test } from '../../models/test.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent {
  @Input()
  Tests: Test[];
  @Input()
  id:number;
  constructor( private _studentService:StudentService){}
  getAvg():number{
    return this._studentService.getAvgById(this.id);
  }
}
