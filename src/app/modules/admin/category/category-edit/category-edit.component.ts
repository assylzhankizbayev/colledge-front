import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { IBreadcumbRoute } from '../../../../core/models/route.model';
import { BreadcrumbsService } from '../../../../core/services/breadcrumbs.service';
import { CategoryFacade } from '../../../../core/facade/category.facade';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent implements OnInit {
  categoryId: number | null = null;
  category$ = this.categoryFacade.category;
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Категории', route: '/admin/category' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryFacade: CategoryFacade,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const categoryId = params.get('categoryId');
          this.categoryId = categoryId ? +categoryId : null;
          return this.categoryId
            ? this.categoryFacade.getCategory(this.categoryId)
            : of(null);
        }),
        tap((res) => {
          if (res?.success) {
            const route: IBreadcumbRoute = {
              title: res.result?.title || '',
              route: null,
            };
            this.breadcrumbsService.addRoute(route);
          }
        })
      )
      .subscribe();
  }

  updateCategory(data: any) {
    if (this.categoryId) {
      this.categoryFacade.updateCategory(this.categoryId, data).subscribe();
    }
  }

  cancel() {
    this.router.navigate(['/admin/category']);
  }
}
