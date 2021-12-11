import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEnvironment } from "../models/environments.model";
import { ENV } from "../../app.token";

@Injectable()
export class AchievementsService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  getAchievements(): Observable<any[]> {
    return this.http.get<any[]>(this.env.host + '/achievements');
  }
}
