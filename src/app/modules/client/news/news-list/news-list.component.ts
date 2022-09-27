import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { INews } from '../../../../core/models/news.model';
import { NewsService } from '../../../../core/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit, OnDestroy {
  news: INews[] = [];
  destroy$ = new Subject();

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService
      .getNews()
      .pipe(
        tap((response) => {
          this.news = response.result;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
