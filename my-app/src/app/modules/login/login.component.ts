import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  id=1;
  login(){
   this._loginService.setUser(this.id)
  }
  logout(){
    this._loginService.setUser(undefined)
  }
  constructor(private _loginService :LoginService){}
}
