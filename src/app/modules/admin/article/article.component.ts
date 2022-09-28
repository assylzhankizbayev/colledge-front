import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { CategoryFacade } from '../../../core/facade/category.facade';
import { ArticleFacade } from '../../../core/facade/article.facade';
import { IBreadcumbRoute } from '../../../core/models/route.model';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-admin-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleAdminComponent implements OnInit {
  articles$ = this.articleFacade.articles;
  isFormToggled = false;
  mainCategory = 10;
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Материалы', route: '/admin/article' },
  ];

  constructor(
    private router: Router,
    private articleFacade: ArticleFacade,
    private categoryFacade: CategoryFacade,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.articleFacade.init();
    this.categoryFacade.initCategoryItems(this.mainCategory);
  }

  addArticle(data: any): void {
    this.articleFacade
      .addArticle(data)
      .pipe(
        tap(() => this.toggleForm()),
        catchError((err) => {
          return of(err);
        }),
        take(1)
      )
      .subscribe();
  }

  edit(id: number): void {
    this.router.navigate(['/admin/article', id, 'edit']);
  }

  remove(id: number) {
    this.articleFacade.deleteArticle(id);
  }

  toggleForm(): void {
    this.isFormToggled = !this.isFormToggled;
  }
}
