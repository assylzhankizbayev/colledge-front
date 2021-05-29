import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIndustry } from 'src/app/modules/landing/interface';
import { IEquipment } from '../models/equipment';
import { IExpert } from '../models/expert';
import { ILab } from '../models/lab';
import { IMiniResearch, IResearch } from '../models/research';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getIndustries(): Observable<IIndustry[]> {
    return this.http.get<IIndustry[]>('assets/mock-data/industries.json');
  }

  getResearch(): Observable<IResearch[]> {
    return this.http.get<IResearch[]>('assets/mock-data/research.json');
  }

  getLabs(): Observable<ILab[]> {
    return this.http.get<ILab[]>('assets/mock-data/labs.json');
  }

  getMiniResearch(): Observable<IMiniResearch[]> {
    return this.http.get<IMiniResearch[]>('assets/mock-data/mini-research.json');
  }

  getExperts(): Observable<IExpert[]> {
    return this.http.get<IExpert[]>('assets/mock-data/experts.json');
  }

  getEquipments(): Observable<IEquipment[]> {
    return this.http.get<IEquipment[]>('assets/mock-data/equipments.json');
  }


}
