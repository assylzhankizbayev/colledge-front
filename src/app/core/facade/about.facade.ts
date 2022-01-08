import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AboutService } from '../services/about.service';

@Injectable()
export class AboutFacade {
  private post$ = new BehaviorSubject<any>([]);
  private title$ = new BehaviorSubject<string | null>(null);
  private body$ = new BehaviorSubject<string | null>(null);

  constructor(private aboutService: AboutService) {}

  get post() {
    return this.post$.asObservable();
  }

  get title() {
    return this.title$.asObservable();
  }

  get body() {
    return this.body$.asObservable();
  }

  init() {
    this.getAboutRes().subscribe();
  }

  private getAboutRes(): Observable<any> {
    return this.aboutService.getAboutPost().pipe(
      take(1),
      tap((post: any) => {
        if (post.success && post.result?.length) {
          this.post$.next(post.result);
          this.title$.next(post.result[0]?.title);
          this.body$.next(post.result[0]?.body);
        }
      })
    );
  }

  submit(value: any): Observable<any> {
    return of(null);
    // return this.aboutService
    //   .addAboutPost(value)
    //   .pipe(switchMap((res) => (res.success ? this.getAboutRes() : of(null))));
  }
}
