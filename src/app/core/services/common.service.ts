import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIndustry } from 'src/app/modules/landing/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getIndustries(): Observable<IIndustry[]> {
    return this.http.get<IIndustry[]>('assets/mock-data/industries.json');
  }
}
