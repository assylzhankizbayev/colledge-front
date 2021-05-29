import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResearch } from '../models/research';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private http: HttpClient) { }

  getResearch(): Observable<IResearch[]> {
    return this.http.get<IResearch[]>('assets/mock-data/research.json');
  }

  getOneResearch(id: number): Observable<IResearch | any> {
    return this.http.get<IResearch[]>('assets/mock-data/research.json').pipe(
      map(res => {
        return res.find(f => f.id === id)
      })
    );
  }

  getResearchByIndId(indId: number): Observable<IResearch[]> {
    return this.http.get<IResearch[]>('assets/mock-data/research.json').pipe(
      map(res => {
        if (indId === -1) return res;
        return res.filter(f => f.industrieId === indId);
      })
    );
  }
  
}
