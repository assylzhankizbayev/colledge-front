import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEnvironment } from "../models/environments.model";
import { ENV } from "../../app.token";

@Injectable()
export class AboutService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment,
  ) {}

  getAboutPost(): Observable<any[]> {
    return this.http.get<any[]>(this.env.host + '/about');
  }

  addAboutPost(data: any): Observable<{ success: boolean }> {
    const body = new FormData();

    Object.keys(data).forEach(key => {
      body.append(`${key}`, data[key]);
    });

    return this.http.post<{ success: boolean }>(this.env.host + '/about', body);
  }
}
