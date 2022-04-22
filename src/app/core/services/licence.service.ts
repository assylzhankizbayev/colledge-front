import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPostRes } from "../models/post.model";
import { IEnvironment } from "../models/environments.model";
import { ENV } from "../../app.token";

@Injectable()
export class LicenceService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  getLicences(): Observable<IPostRes> {
    return this.http.get<IPostRes>(this.env.host + '/licence');
  }

  addLicence(data: any): Observable<{ success: boolean }> {
    const body = new FormData();

    Object.keys(data).forEach(key => {
      body.append(`${key}`, data[key]);
    });

    return this.http.post<{ success: boolean }>(this.env.host + '/licence', body);
  }
}
