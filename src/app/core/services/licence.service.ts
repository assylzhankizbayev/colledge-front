import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostRes, IPostSingleRes } from '../models/post.model';
import { IEnvironment } from '../models/environments.model';
import { ENV } from '../../app.token';
import { ILicenceBody } from '../models/licence.model';

@Injectable()
export class LicenceService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  getLicences(): Observable<IPostRes> {
    return this.http.get<IPostRes>(this.env.host + '/licence');
  }

  getLicence(id: number): Observable<IPostSingleRes> {
    return this.http.get<IPostSingleRes>(this.env.host + `/licence/${id}`);
  }

  addLicence(data: any): Observable<IPostRes> {
    const body = new FormData();

    Object.keys(data).forEach((key) => {
      body.append(`${key}`, data[key]);
    });

    return this.http.post<IPostRes>(this.env.host + '/licence', body);
  }

  updateLicence(data: any): Observable<IPostSingleRes> {
    const body = new FormData();

    Object.keys(data).forEach((key) => {
      body.append(`${key}`, data[key]);
    });

    return this.http.put<IPostSingleRes>(this.env.host + `/licence`, body);
  }

  deleteLicence(id: number): Observable<IPostRes> {
    return this.http.delete<IPostRes>(this.env.host + `/licence/${id}`);
  }
}
