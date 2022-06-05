import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../../app.token';
import { IEnvironment } from '../models/environments.model';
import { IAllFiles } from '../models/files.model';

@Injectable({ providedIn: 'root' })
export class FilesService {
  url = this.env.host;

  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  getFiles(): Observable<IAllFiles> {
    return this.http.get<IAllFiles>(this.url + '/files?type=image');
  }
}
