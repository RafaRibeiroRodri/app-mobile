import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoggedGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      const user = localStorage.getItem('user');
      if (user) {
        resolve(true);
      } else {
        this.router.navigateByUrl('login');
        resolve(false);
      }
    });
  }
}
