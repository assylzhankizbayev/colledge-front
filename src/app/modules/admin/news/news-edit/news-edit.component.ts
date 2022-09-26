import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError, mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.scss'],
})
export class NewsEditComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  newsId: number | null = null;
  mainCategory = 10;
  news: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const id = params.get('id');
          this.newsId = id ? +id : null;

          return id ? this.newsService.getNewsById(+id) : of(null);
        }),
        tap((res) => {
          console.log(res);
          if (res?.success) {
            this.news = res.result;
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  update(data: any): void {
    if (this.newsId) {
      this.newsService
        .updateNews(this.newsId, data)
        .pipe(
          tap(() => this.goBack()),
          catchError((err) => {
            console.log(err);

            return of(err);
          }),
          takeUntil(this.destroy$),
          take(1)
        )
        .subscribe();
    }
  }

  goBack(): void {
    this.router.navigate(['/admin/news']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
