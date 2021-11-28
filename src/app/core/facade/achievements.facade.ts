import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AchievementsService } from '../services/achievements.service';

@Injectable()
export class AchievementsFacade {
  private post$ = new BehaviorSubject<any>([]);
  private title$ = new BehaviorSubject<string | null>(null);
  private body$ = new BehaviorSubject<string | null>(null);

  constructor(private achievementsService: AchievementsService) {}

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

  private getAchievements(): Observable<any> {
    return this.achievementsService.getAchievements().pipe(
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
}
