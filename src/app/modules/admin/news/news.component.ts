import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap, take, tap } from 'rxjs/operators';
import { NewsService } from '../../../core/services/news.service';

@Component({
  selector: 'app-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsAdminComponent implements OnInit {
  toggled = false;
  news: any[] = [];

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNewsList().subscribe();
  }

  private getNewsList() {
    return this.newsService.getNews().pipe(
      tap((res) => (this.news = res.result)),
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
}
