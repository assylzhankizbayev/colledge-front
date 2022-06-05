import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ENV } from '../../app.token';
import { ILoginBody, ILoginRes, IUpdateTokenRes } from '../models/auth.model';
import { IEnvironment } from '../models/environments.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = this.env.host + '/auth';
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.isLoggedIn$.value;
  }

  get token() {
    return localStorage.getItem('refreshToken');
  }

  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  login(body: ILoginBody): Observable<ILoginRes> {
    return this.http.post<ILoginRes>(this.url + '/login', body).pipe(
      tap((res) => {
        this.isLoggedIn$.next(true);
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
      })
    );
  }

  updateToken(token: string): Observable<IUpdateTokenRes> {
    return this.http
      .post<IUpdateTokenRes>(this.url + '/update-token', { token })
      .pipe(
        tap((res) => {
          this.isLoggedIn$.next(true);
          localStorage.setItem('accessToken', res.accessToken);
        })
      );
  }

  logout(): void {
    this.isLoggedIn$.next(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
