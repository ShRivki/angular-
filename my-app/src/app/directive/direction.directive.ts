import { Directive, ElementRef, Host, Input } from "@angular/core";
import { Observable, filter, from, interval, map } from 'rxjs';


@Directive({
    selector:"[diraction]"
})
export class DiractionDirective{
    // @Input()
    // diraction: Observable<String> = new Observable()
    constructor(private _element:ElementRef){
      console.log("dddddddd")
    }
//  ngOnInit(){
//        this._element.nativeElement.classList.add(this.diraction);
     
//  }
//  ngOnChanges(){
//     this.diraction.subscribe((val: string) => {
//        this._element.nativeElement.classList.add(val);
        
        
//       })


}