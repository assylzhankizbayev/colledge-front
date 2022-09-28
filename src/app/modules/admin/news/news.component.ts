import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { INews } from '../../../core/models/news.model';
import { IBreadcumbRoute } from '../../../core/models/route.model';
import { NewsService } from '../../../core/services/news.service';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsAdminComponent implements OnInit {
  toggled = false;
  news: INews[] = [];
  destroy$ = new Subject();
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Новости', route: '/admin/news' },
  ];

  constructor(
    private router: Router,
    private newsService: NewsService,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.getNewsList().subscribe();
  }

  private getNewsList() {
    return this.newsService.getNews().pipe(
      tap((res) => (this.news = res.result)),
      takeUntil(this.destroy$),
      take(1)
    );
  }

  submit(body: any): void {
    this.newsService
      .addNews(body)
      .pipe(
        tap(() => {
          this.toggleForm();
        }),
        mergeMap(() => this.getNewsList())
      )
      .subscribe();
  }

  edit(id: number): void {
    this.router.navigate(['/admin/news', id, 'edit']);
  }

  toggleForm(): void {
    this.toggled = !this.toggled;
  }

  remove(id: number) {
    this.newsService
      .deleteNewsById(id)
      .pipe(
        mergeMap(() => this.getNewsList()),
        takeUntil(this.destroy$),
        take(1)
      )
      .subscribe();
  }
}
