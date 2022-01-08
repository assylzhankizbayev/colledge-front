import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IArticle } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/core/services/article.service';

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
            this.articles = next.result.map(item => ({
              ...item,
              body: item.body.replace('<p>', '').replace('</p>', '').slice(0, 270) + '...'
            }));
          }
        })
      )
      .subscribe();
  }
}
