import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { ArticleService } from '../services/article.service';

@Injectable()
export class ArticleFacade {
  private articles$ = new BehaviorSubject<any>([]);
  private article$ = new BehaviorSubject<any>(null);

  constructor(private articleService: ArticleService) {}

  get articles() {
    return this.articles$.asObservable();
  }

  get article() {
    return this.article$.asObservable();
  }

  init() {
    this.getArticles().subscribe();
  }

  getArticles(): Observable<any> {
    return this.articleService.getArticles().pipe(
      take(1),
      tap((articles: any) => {
        if (articles.success) {
          const result = articles.result.map((item: any) => ({
            ...item,
            categoryItemId: item.category_item_id,
          }));
          this.articles$.next(result);
        }
      })
    );
  }

  getArticle(id: number): Observable<any> {
    return this.articleService.getArticle(id).pipe(
      take(1),
      tap((article: any) => {
        if (article.success) {
          this.article$.next({
            ...article.result,
            categoryItemId: article.result.category_item_id,
          });
        }
      })
    );
  }

  addArticle(value: any): Observable<any> {
    return this.articleService
      .addArticle(value)
      .pipe(switchMap((res) => (res.success ? this.getArticles() : of(null))));
  }

  updateArticle(id: number, value: any): Observable<any> {
    return this.articleService
      .updateArticle(id, value)
      .pipe(switchMap((res) => (res.success ? this.getArticles() : of(null))));
  }

  deleteArticle(id: number): void {
    this.articleService
      .deleteArticle(id)
      .pipe(
        switchMap((res) => (res.success ? this.getArticles() : of(null))),
        take(1)
      )
      .subscribe();
  }
}
