import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ArticleService } from '../services/article.service';

@Injectable()
export class AchievementsFacade {
  private title$ = new BehaviorSubject<string | null>(null);
  private body$ = new BehaviorSubject<string | null>(null);

  constructor(private articleService: ArticleService) {}

  get title() {
    return this.title$.asObservable();
  }

  get body() {
    return this.body$.asObservable();
  }

  init() {
    this.getAchievements().subscribe();
  }

  private getAchievements(): Observable<any> {
    return this.articleService.getArticleById(14).pipe(
      take(1),
      tap((post: any) => {
        if (post.success) {
          this.title$.next(post.result?.title);
          this.body$.next(post.result?.body);
        }
      })
    );
  }
}
