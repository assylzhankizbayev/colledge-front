import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const token = this.authService.token;

    return !this.authService.isLoggedIn && token
      ? this.authService.updateToken(token).pipe(
          map(() => {
            this.router.navigate(['/admin']);
            return false;
          }),
          catchError(() => of(true))
        )
      : of(true);
  }
}
