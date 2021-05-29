import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IExpert } from '../models/expert';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  constructor(private http: HttpClient) { }

  getExperts(): Observable<IExpert[]> {
    return this.http.get<IExpert[]>('assets/mock-data/experts.json');
  }

  getExpert(id: number): Observable<IExpert | any> {
    return this.http.get<IExpert[]>('assets/mock-data/experts.json').pipe(
      map(res => {
        return res.find(f => f.id === id)
      })
    );
  }

  getExpertByResearchId(id: number): Observable<IExpert | any> {
    return this.http.get<IExpert[]>('assets/mock-data/experts.json').pipe(
      map(res => {
        return res.filter(f => {
          f.researchCount = f.researchList.reduce((s, r) => s + r.count, 0);
          
          const ids = f.miniResearchIds ? f.miniResearchIds.split('|') : [];
          return ids?.length ? ids.map(id => +id).includes(id) : false;
        })
      })
    );
  }

}
