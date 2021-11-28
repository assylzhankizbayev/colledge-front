import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPostRes } from "../models/post.model";

@Injectable()
export class LicenceService {
  private readonly host = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getLicences(): Observable<IPostRes> {
    return this.http.get<IPostRes>(this.host + '/licence');
  }
}
