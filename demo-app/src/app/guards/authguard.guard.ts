import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("===route",route.url[0].path)

     var username = localStorage.getItem('username');
     if(username ){
      return true;
     }else if(username && route.url[0].path === 'second-page'){
      return true;
     } else{
       return false;
     }
    
  }
  
}
