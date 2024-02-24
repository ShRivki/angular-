import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../student/student.service';
import { flush } from '@angular/core/testing';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AutoGuardService implements CanActivate {
 
  constructor(private _loginService :LoginService ,private _router:Router){}
  canActivate(): boolean  {
   
    if(this._loginService.getUser()!=undefined)
    
      return true;
    else{
      this._router.navigate(['/login'])
    }
      return false;  
}
}
