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

}
