import { Component, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ENV } from '../../../app.token';
import { IEnvironment } from '../../../core/models/environments.model';
import { Route } from '../../../core/models/route.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() direction: 'row' | 'column' = 'column';
  @Input() newsItem: any;
  host = this.env.host;


  constructor(
    private router: Router,
    @Inject(ENV) private env: IEnvironment
    ) {}

  openNews() {
    if (this.newsItem?.id) {
      this.router.navigate([Route.ClientNews, this.newsItem.id]);
    }
  }
}
