import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMiniResearch } from '../models/research';

@Injectable({
  providedIn: 'root'
})
export class MiniResearchService {

  constructor(private http: HttpClient) { }

  getMiniResearch(): Observable<IMiniResearch[]> {
    return this.http.get<IMiniResearch[]>('assets/mock-data/mini-research.json');
  }

  getOneMiniResearch(id: number): Observable<IMiniResearch | any> {
    return this.http.get<IMiniResearch[]>('assets/mock-data/mini-research.json').pipe(
      map(res => {
        return res.find(f => f.id === id)
      })
    );
  }

}
