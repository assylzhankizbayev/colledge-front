import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError, mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { ArticleFacade } from '../../../../core/facade/article.facade';
import { CategoryFacade } from '../../../../core/facade/category.facade';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
})
export class ArticleEditComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  readonly article$ = this.articleFacade.article;
  articleId: number | null = null;
  mainCategory = 10;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleFacade: ArticleFacade,
    private categoryFacade: CategoryFacade
  ) {}

  ngOnInit(): void {
    this.categoryFacade.initCategoryItems(this.mainCategory);

    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const id = params.get('id');
          this.articleId = id ? +id : null;

          return id ? this.articleFacade.getArticle(+id) : of(null);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  update(data: any): void {
    if (this.articleId) {
      this.articleFacade
        .updateArticle(this.articleId, data)
        .pipe(
          tap(() => {
            this.router.navigate(['/article']);
          }),
          catchError((err) => {
            console.log(err);

            return of(err);
          }),
          take(1)
        )
        .subscribe();
    }
  }

  cancel(): void {
    this.router.navigate(['/article']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
