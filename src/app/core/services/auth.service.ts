import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ENV } from '../../app.token';
import { ILoginBody, ILoginRes } from '../models/auth.model';
import { IEnvironment } from '../models/environments.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  login(body: ILoginBody): Observable<ILoginRes> {
    return this.http.post<ILoginRes>(this.env.host + '/auth/login', body).pipe(
      tap(res => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
      })
    );
  }
}
