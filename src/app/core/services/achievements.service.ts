import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../../app.token';
import { IEnvironment } from '../models/environments.model';

@Injectable({ providedIn: 'root' })
export class AchievementsService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  getAchievements(): Observable<any[]> {
    return this.http.get<any[]>(this.env.host + '/achievements');
  }

  addAchievement(data: any): Observable<{ success: boolean }> {
    const body = new FormData();

    Object.keys(data).forEach((key) => {
      body.append(`${key}`, data[key]);
    });

    return this.http.post<{ success: boolean }>(
      this.env.host + '/achievements',
      body
    );
  }
}
