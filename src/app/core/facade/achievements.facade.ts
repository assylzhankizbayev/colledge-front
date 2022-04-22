import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { AchievementsService } from '../services/achievements.service';
import { ArticleService } from '../services/article.service';

@Injectable()
export class AchievementsFacade {
  private post$ = new BehaviorSubject<any>([]);
  private title$ = new BehaviorSubject<string | null>(null);
  private body$ = new BehaviorSubject<string | null>(null);

  constructor(
    private articleService: ArticleService,
    private achievementsService: AchievementsService
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
    this.getAchievements().subscribe();
  }

  initAdmin() {
    this.getAchievementPosts().subscribe();
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

  getAchievementPosts(): Observable<any> {
    return this.achievementsService.getAchievements().pipe(
      take(1),
      tap((post: any) => {
        if (post.success) {
          this.post$.next(post.result);
        }
      })
    );
  }

  submit(value: any): Observable<any> {
    return this.achievementsService
      .addAchievement(value)
      .pipe(switchMap((res) => (res.success ? this.getAchievementPosts() : of(null))));
  }
}
