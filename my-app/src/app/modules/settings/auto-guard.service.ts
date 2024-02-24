import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../student/student.service';
import { flush } from '@angular/core/testing';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AutoGuardService implements CanActivate {
 
  constructor(private _loginService :LoginService){}
  canActivate(): boolean  {
   
    if(this._loginService.getUser()!=undefined)
      return true;
    else
      return false;  
}
}
