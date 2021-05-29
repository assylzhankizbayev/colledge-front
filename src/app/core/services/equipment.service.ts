import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEquipment } from '../models/equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(private http: HttpClient) { }

  getEquipments(): Observable<IEquipment[]> {
    return this.http.get<IEquipment[]>('assets/mock-data/equipments.json');
  }

  getEquipment(id: number): Observable<IEquipment | any> {
    return this.http.get<IEquipment[]>('assets/mock-data/equipments.json').pipe(
      map(res => {
        return res.find(f => f.id === id)
      })
    );
  }

  getEquipmentsByLabId(id: number): Observable<IEquipment[]> {
    return this.http.get<IEquipment[]>('assets/mock-data/equipments.json').pipe(
      map(res => {
        let result: IEquipment[] = [];
        let labIds_: number[] = [];
        res.forEach(r => {
          labIds_ = r.labIds  ? r.labIds.split('|').map(r => +r) : [];
          if (labIds_.findIndex(f => f === id) != -1) {
            result.push(r);
          }
        });
        return result;
      })
    );
  }

}
