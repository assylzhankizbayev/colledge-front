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

}
