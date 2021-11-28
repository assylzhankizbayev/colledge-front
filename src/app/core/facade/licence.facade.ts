import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ILicence } from '../models/licence.model';
import { IPostRes } from '../models/post.model';
import { LicenceService } from '../services/licence.service';

@Injectable()
export class LicenceFacade {
  private title$ = new BehaviorSubject<string | null>('Лицензии');
  private licences$ = new BehaviorSubject<ILicence[] | null>(null);
  host = environment.host;

  constructor(private licenceService: LicenceService) {}

  get title() {
    return this.title$.asObservable();
  }

  get licences() {
    return this.licences$.asObservable();
  }

  init() {
    this.getLicences().subscribe();
  }

  private getLicences(): Observable<IPostRes> {
    return this.licenceService.getLicences().pipe(
      take(1),
      tap((post) => {
        if (post.success && post.result?.length) {
          this.licences$.next(
            post.result.map((item) => ({
              title: item.title,
              src: this.host + item.files.path,
            }))
          );
        }
      })
    );
  }
}
