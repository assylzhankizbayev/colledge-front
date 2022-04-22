import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV } from '../../app.token';
import { IEnvironment } from '../models/environments.model';

@Injectable({ providedIn: 'root' })
export class NewService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  getNews(): Observable<any[]> {
    return this.http.get<any[]>(this.env.host + '/news');
  }

  addNews(data: any): Observable<{ success: boolean }> {
    const body = new FormData();

    Object.keys(data).forEach((key) => {
      body.append(`${key}`, data[key]);
    });

    return this.http.post<{ success: boolean }>(this.env.host + '/news', body);
  }
}
