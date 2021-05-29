import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILab } from '../models/lab';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor(private http: HttpClient) { }

  getLabs(): Observable<ILab[]> {
    return this.http.get<ILab[]>('assets/mock-data/labs.json');
  }

  getLab(id: number): Observable<ILab | any> {
    return this.http.get<ILab[]>('assets/mock-data/labs.json').pipe(
      map(res => {
        return res.find(f => f.id === id)
      })
    );
  }

  getLabsByMiniResearchId(id: number): Observable<ILab[]> {
    return this.http.get<ILab[]>('assets/mock-data/labs.json').pipe(
      map(res => {
        let result: ILab[] = [];
        let miniResearchIds_: number[] = [];
        res.forEach(r => {
          miniResearchIds_ = r.miniResearchIds  ? r.miniResearchIds.split('|').map(r => +r) : [];
          if (miniResearchIds_.findIndex(f => f === id) != -1) {
            result.push(r);
          }
        });
        return result;
      })
    );
  }

  getLabsByLabId(id: number): Observable<ILab[]> {
    return this.http.get<ILab[]>('assets/mock-data/labs.json').pipe(
      map(res => {
        let result: ILab[] = [];
        let equipmentIds_: number[] = [];
        res.forEach(r => {
          equipmentIds_ = r.expertIds  ? r.equipmentIds.split('|').map(r => +r) : [];
          if (equipmentIds_.findIndex(f => f === id) != -1) {
            result.push(r);
          }
        });
        return result;
      })
    );
  }

  getLabsByExpertId(id: number): Observable<ILab[]> {
    return this.http.get<ILab[]>('assets/mock-data/labs.json').pipe(
      map(res => {
        let result: ILab[] = [];
        let expertIds_: number[] = [];
        res.forEach(r => {
          expertIds_ = r.expertIds  ? r.expertIds.split('|').map(r => +r) : [];
          if (expertIds_.findIndex(f => f === id) != -1) {
            result.push(r);
          }
        });
        return result;
      })
    );
  }

}
