import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../../app.token';
import { IEnvironment } from '../models/environments.model';
import { IFaq, IFaqItemRes, IFaqRes, IFaqUpdate } from '../models/faq.model';

@Injectable()
export class FaqService {
  url = this.env.host + '/faq';

  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  getFaqList(): Observable<IFaqRes> {
    return this.http.get<IFaqRes>(this.url + '/');
  }

  getFaqById(id: number): Observable<IFaqItemRes> {
    return this.http.get<IFaqItemRes>(this.url + `/${id}`);
  }

  addFaq(body: IFaq): Observable<IFaqUpdate> {
    return this.http.post<IFaqUpdate>(this.url + '/', body);
  }

  updateFaq(id: number, body: IFaq): Observable<IFaqUpdate> {
    return this.http.put<IFaqUpdate>(this.url + `/${id}`, body);
  }

  deleteFaq(id: number): Observable<IFaqUpdate> {
    return this.http.delete<IFaqUpdate>(this.url + `/${id}`);
  }
}
