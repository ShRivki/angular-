import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 userId:number=undefined
  getUser(){
    return this.userId;
  }
  setUser(id:number){
    this.userId=id;
  }

}
