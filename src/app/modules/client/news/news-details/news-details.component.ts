import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NewsService } from '../../../../core/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  news: any;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => {
          const id = params.get('id');
          return id ? this.newsService.getNewsById(+id) : of(null);
        }),
        map((res) => {
          if (res?.success) {
            this.news = res.result;
          }
        })
      )
      .subscribe();
  }
}
