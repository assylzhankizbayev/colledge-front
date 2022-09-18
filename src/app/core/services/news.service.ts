import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ENV } from '../../app.token';
import { IEnvironment } from '../models/environments.model';
import { INewsResponse } from '../models/news.model';

@Injectable()
export class NewsService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  getNews(): Observable<INewsResponse> {
    return this.http.get<INewsResponse>(this.env.host + '/news');
  }

  addNews(data: any): Observable<{ success: boolean }> {
    const body = new FormData();

    Object.keys(data).forEach((key) => {
      body.append(`${key}`, data[key]);
    });

    return this.http.post<{ success: boolean }>(this.env.host + '/news', body);
  }
}
