import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.isAuthenticated()) {
      console.log('paso el guard');
      return true;
    } else {
      console.error('no paso el guard');
      return false;

    }

  }
}
