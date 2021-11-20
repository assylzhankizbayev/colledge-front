import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AboutService {
  private readonly host = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAboutPost(): Observable<any[]> {
    return this.http.get<any[]>(this.host + '/about');
  }
}
