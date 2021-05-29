import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, min } from 'rxjs/operators';
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

}
