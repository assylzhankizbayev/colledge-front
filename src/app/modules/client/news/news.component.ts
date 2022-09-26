import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { INews } from '../../../core/models/news.model';
import { NewsService } from '../../../core/services/news.service';

@Component({
  selector: 'app-client-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsClientComponent implements OnInit, OnDestroy {
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
