import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IArticle } from '../../../core/models/article.model';
import { ArticleService } from '../../../core/services/article.service';

@Component({
  selector: 'app-abiturients',
  templateUrl: './abiturients.component.html',
  styleUrls: ['./abiturients.component.scss'],
})
export class AbiturientsComponent implements OnInit {
  articles: IArticle[] = [];
  abiturientCategoryId = 4;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService
      .getArticlesByCategoryId(this.abiturientCategoryId)
      .pipe(
        tap((next) => {
          if (next?.success) {
            this.articles = next.result.map((item) => {
              const body = item.body.replace(/<p>/g, '').replace(/<\/p>/g, '');
              const tableIndex = body.indexOf('<table');
              return {
                ...item,
                body:
                  body.slice(0, tableIndex !== -1 ? tableIndex : 270) + '...',
              };
            });
          }
        })
      )
      .subscribe();
  }
}
