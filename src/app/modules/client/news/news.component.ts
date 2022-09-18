import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NewsService } from '../../../core/services/news.service';

@Component({
  selector: 'app-client-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsClientComponent implements OnInit, OnDestroy {
  news = [
    {
      id: 1,
      title:
        'Колледж им. Д.А. Кунаева вошел в рейтинг The Times Higher Education',
    },
    {
      id: 2,
      title:
        'Колледж им. Д.А. Кунаева продолжает расти в рейтинге QS World University Rankings',
    },
    {
      id: 3,
      title:
        'Колледж им. Д.А. Кунаева предлагает дополнительные льготы для вакцинированных студентов и сотрудников',
    },
    {
      id: 4,
      title:
        'Колледж им. Д.А. Кунаева – открытая дверь в мир новых возможностей',
    },
  ];
  destroy$ = new Subject();

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {}
}
