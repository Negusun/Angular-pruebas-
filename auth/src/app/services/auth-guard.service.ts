import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements  CanActivate{

  constructor(
    private router:Router,
    private auth:AuthService
  ) { }

  canActivate(){
    if(this.auth.isAuthenticated()){
      console.log("autenmticado");
      return true;
    }else{
      console.log("No autorizado");
      this.router.navigate(['home']);
      return false;
    }
  }
}
