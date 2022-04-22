import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { CategoryFacade } from '../../../core/facade/category.facade';
import { ArticleFacade } from '../../../core/facade/article.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleAdminComponent implements OnInit {
  articles$ = this.articleFacade.articles;
  isFormToggled = false;
  mainCategory = 10;
  displayedColumns: string[] = ['title', 'created_at', 'author', 'controls'];

  constructor(
    private router: Router,
    private articleFacade: ArticleFacade,
    private categoryFacade: CategoryFacade
  ) { }

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
          console.log(err);

          return of(err);
        }),
        take(1)
      )
      .subscribe();
  }

  edit(id: number): void {
    this.router.navigate(['/article', id, 'edit']);
  }

  remove(id: number) {
    this.articleFacade.deleteArticle(id);
  }

  toggleForm(): void {
    this.isFormToggled = !this.isFormToggled;
  }
}
