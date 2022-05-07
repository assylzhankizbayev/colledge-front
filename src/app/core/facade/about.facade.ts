import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { AboutService } from '../services/about.service';
import { ArticleService } from '../services/article.service';

@Injectable()
export class AboutFacade {
  private post$ = new BehaviorSubject<any>([]);
  private title$ = new BehaviorSubject<string | null>(null);
  private body$ = new BehaviorSubject<string | null>(null);

  constructor(
    private aboutService: AboutService,
    private articleService: ArticleService
  ) {}

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
    return this.articleService.getArticle(22).pipe(
      take(1),
      tap((article) => {
        this.title$.next(article.result?.title);
        this.body$.next(article.result?.body);
      })
    );
  }

  submit(value: any): Observable<any> {
    return this.aboutService
      .addAboutPost(value)
      .pipe(switchMap((res) => (res.success ? this.getAboutRes() : of(null))));
  }
}
