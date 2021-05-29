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

  getOneMiniResearchByResearchId(id: number): Observable<IMiniResearch | any> {
    return this.http.get<IMiniResearch[]>('assets/mock-data/mini-research.json').pipe(
      map(res => {
        return res.filter(f => f.researchId === id)
      })
    );
  }

  getMiniResearchByEquipmentId(id: number): Observable<IMiniResearch | any> {
    return this.http.get<IMiniResearch[]>('assets/mock-data/mini-research.json').pipe(
      map(res => {
        let result: IMiniResearch[] = [];
        let equipmentIds_: number[] = [];
        res.forEach(r => {
          equipmentIds_ = r.equipmentIds  ? r.equipmentIds.split('|').map(r => +r) : [];
          if (equipmentIds_.findIndex(f => f === id) != -1) {
            result.push(r);
          }
        });
        return result;
      })
    );
  }

}
