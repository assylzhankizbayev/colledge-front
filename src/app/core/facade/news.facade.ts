import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { NewsService } from '../services/news.service';

@Injectable()
export class NewsFacade {
  private news$ = new BehaviorSubject<any>([]);

  constructor(private newsService: NewsService) {}

  get news() {
    return this.news$.asObservable();
  }

  init() {
    this.getNewsRes().subscribe();
  }

  getNewsRes(): Observable<any> {
    return this.newsService.getNews().pipe(
      take(1),
      tap((news: any) => {
        if (news.success) {
          this.news$.next(news.result);
        }
      })
    );
  }

  submit(value: any): Observable<any> {
    return this.newsService
      .addNews(value)
      .pipe(switchMap((res) => (res.success ? this.getNewsRes() : of(null))));
  }
}
