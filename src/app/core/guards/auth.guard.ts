import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const token = this.authService.token;

    if (!this.authService.isLoggedIn && token) {
      return this.authService.updateToken(token).pipe(
        map((res) => res?.accessToken != null),
        catchError((err) => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          this.router.navigate(['/login']);
          return of(false);
        })
      );
    } else if (!this.authService.isLoggedIn && !token) {
      return of(false).pipe(tap(() => this.router.navigate(['/login'])));
    } else {
      return of(true);
    }
  }
}
