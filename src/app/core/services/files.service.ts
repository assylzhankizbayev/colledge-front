import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../../app.token';
import { IEnvironment } from '../models/environments.model';
import { IAllFiles, IFileUpload } from '../models/files.model';

@Injectable({ providedIn: 'root' })
export class FilesService {
  url = this.env.host + '/files';

  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  getFiles(): Observable<IAllFiles> {
    const params = new HttpParams().set('type', 'image');
    return this.http.get<IAllFiles>(this.url, { params });
  }

  upload(data: any): Observable<IFileUpload> {
    const body = new FormData();

    Object.keys(data).forEach((key) => {
      body.append(`${key}`, data[key]);
    });

    return this.http.post<IFileUpload>(this.url + '/upload', body);
  }

  delete(id: number) {
    return this.http.delete(this.url + `/${id}`);
  }
}
