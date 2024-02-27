import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent {
  d:string
  changeToRtl(){
    this.d="rtl";
   }
  changeToLtr(){
   this.d="ltr";

  }
}
