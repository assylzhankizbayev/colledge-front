import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ILicence, ILicenceBody } from '../models/licence.model';
import { IPostRes, IPostSingleRes } from '../models/post.model';
import { LicenceService } from '../services/licence.service';

@Injectable()
export class LicenceFacade {
  private post$ = new BehaviorSubject<any>([]);
  private title$ = new BehaviorSubject<string | null>('Лицензии');
  private licences$ = new BehaviorSubject<ILicence[] | null>(null);
  host = environment.host;

  constructor(private licenceService: LicenceService, private router: Router) {}

  get post() {
    return this.post$.asObservable();
  }

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
              id: item.id,
              title: item.title,
              created_at: item.created_at,
              src: item?.files?.path ? this.host + item.files.path : '',
            }))
          );
        }
      })
    );
  }

  getLicence(id: number): Observable<IPostSingleRes> {
    return this.licenceService.getLicence(id).pipe(take(1));
  }

  submit(body: ILicenceBody): Observable<IPostRes | null> {
    return this.licenceService.addLicence(body).pipe(
      take(1),
      switchMap((res) => (res.success ? this.getLicences() : of(null)))
    );
  }

  update(body: ILicenceBody): Observable<IPostSingleRes> {
    return this.licenceService.updateLicence(body).pipe(
      take(1),
      tap(() => this.router.navigate(['/admin/licence']))
    );
  }

  delete(id: number): Observable<IPostRes | null> {
    return this.licenceService.deleteLicence(id).pipe(
      take(1),
      switchMap((res) => (res.success ? this.getLicences() : of(null)))
    );
  }
}
