import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';
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
    this.getNewsList();
  }

  private getNewsList(): void {
    this.newsService
      .getNews()
      .pipe(
        tap((res) => (this.news = res.result)),
        take(1)
      )
      .subscribe();
  }

  submit(body: any): void {
    this.newsService
      .addNews(body)
      .pipe(
        tap(() => {
          this.toggleForm();
        })
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
