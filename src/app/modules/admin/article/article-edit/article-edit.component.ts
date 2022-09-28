import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError, mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { IBreadcumbRoute } from '../../../../core/models/route.model';
import { BreadcrumbsService } from '../../../../core/services/breadcrumbs.service';
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
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Материалы', route: '/admin/article' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleFacade: ArticleFacade,
    private categoryFacade: CategoryFacade,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.categoryFacade.initCategoryItems(this.mainCategory);

    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const id = params.get('id');
          this.articleId = id ? +id : null;

          return id ? this.articleFacade.getArticle(+id) : of(null);
        }),
        tap((res) => {
          if (res?.success) {
            const route: IBreadcumbRoute = {
              title: res.result?.title,
              route: null,
            };
            this.breadcrumbsService.addRoute(route);
          }
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
            this.router.navigate(['/admin/article']);
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
    this.router.navigate(['/admin/article']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
