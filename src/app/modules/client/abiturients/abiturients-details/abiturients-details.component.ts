import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { IArticle } from '../../../../core/models/article.model';
import { ArticleService } from '../../../../core/services/article.service';

@Component({
  selector: 'app-abiturients-details',
  templateUrl: './abiturients-details.component.html',
  styleUrls: ['./abiturients-details.component.scss'],
})
export class AbiturientsDetailsComponent implements OnInit {
  article: IArticle | null = null;
  abiturientCategoryId = 4;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const id = params.get('id');
          return id ? this.articleService.getArticleById(+id) : of(null);
        }),
        map((res) => {
          if (res?.success) {
            this.article = res.result;
          }
        })
      )
      .subscribe();
  }
}
