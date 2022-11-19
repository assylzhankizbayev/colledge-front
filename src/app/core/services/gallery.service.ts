import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ENV } from "src/app/app.token";
import { IEnvironment } from "../models/environments.model";
import { IFile } from "../models/files.model";
import { GalleryFile, IGallery, IGalleryResponse } from "../models/gallery.model";

@Injectable()
export class GalleryService {
  url = this.env.host + '/gallery';

  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) { }

  addGallery(data: Omit<IGallery<File>, 'id'>): Observable<IGalleryResponse<IGallery<File>>> {
    const body = new FormData();
    body.append('title', data.title);
    body.append('file', data.file);

    return this.http.post<IGalleryResponse<IGallery<File>>>(this.url, body);
  }

  // todo
  updateGallery(data: IGallery<File>) {
    const body = new FormData();
    body.append('title', data.title);
    body.append('file', data.file);

    return this.http.put(this.url + `/${data.id}`, body);
  }

  getGalleryList(): Observable<IGalleryResponse<GalleryFile[]>> {
    return this.http.get<IGalleryResponse<IGallery<IFile>[]>>(this.url);
  }

  getGalleryById(id: number): Observable<IGalleryResponse<IGallery<IFile>>> {
    return this.http.get<IGalleryResponse<IGallery<IFile>>>(this.url + `/${ id }`);
  }

  deleteGallery(id: number) {
    return this.http.delete(this.url + `/${id}`);
  }
}
