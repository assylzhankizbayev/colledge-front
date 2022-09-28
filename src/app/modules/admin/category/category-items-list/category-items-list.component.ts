import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { CategoryFacade } from '../../../../core/facade/category.facade';
import { ISubmitResponse } from '../../../../core/models/common.model';
import { IBreadcumbRoute } from '../../../../core/models/route.model';
import { BreadcrumbsService } from '../../../../core/services/breadcrumbs.service';
import { CategoryItemModalComponent } from '../category-item-modal/category-item-modal.component';

@Component({
  selector: 'app-category-items-list',
  templateUrl: './category-items-list.component.html',
  styleUrls: ['./category-items-list.component.scss'],
})
export class CategoryItemsListComponent implements OnInit {
  categoryId: number | null = null;
  categoryItems$ = this.categoryFacade.categoryItems;
  displayedColumns: string[] = [
    'id',
    'title',
    'parentCategoryItemId',
    'orderIdx',
    'controls',
  ];
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Категории', route: '/admin/category' },
  ];

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private categoryFacade: CategoryFacade,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const categoryId = params.get('categoryId');
          this.categoryId = categoryId ? +categoryId : null;

          return this.categoryId
            ? this.getCategoryItems(this.categoryId)
            : of(undefined);
        }),
        tap((res) => {
          if (res?.success) {
            const route: IBreadcumbRoute = {
              title: '...',
              route: null,
            };
            this.breadcrumbsService.addRoute(route);
          }
        })
      )
      .subscribe();
  }

  getCategoryItems(categoryId: number) {
    return this.categoryFacade.getCategoryItemsOf(categoryId);
  }

  addCategoryItem() {
    this.dialog
      .open(CategoryItemModalComponent, {
        panelClass: 'custom-dialog-container',
        data: {},
        width: '450px',
      })
      .afterClosed()
      .pipe(
        take(1),
        mergeMap((data) =>
          this.categoryId && data
            ? this.categoryFacade.addCategoryItem(this.categoryId, data)
            : of(undefined)
        ),
        mergeMap((response: ISubmitResponse | undefined) =>
          response?.success && this.categoryId
            ? this.getCategoryItems(this.categoryId)
            : of(undefined)
        )
      )
      .subscribe();
  }

  updateCategoryItem(id: number, categories: any[]) {
    const categoryItem = categories.find((category) => category.id === id);

    if (categoryItem) {
      this.dialog
        .open(CategoryItemModalComponent, {
          panelClass: 'custom-dialog-container',
          data: { categoryItem },
          width: '450px',
        })
        .afterClosed()
        .pipe(
          mergeMap((data) =>
            data
              ? this.categoryFacade.updateCategoryItem(id, data)
              : of(undefined)
          ),
          mergeMap((response: ISubmitResponse | undefined) =>
            response?.success && this.categoryId
              ? this.getCategoryItems(this.categoryId)
              : of(undefined)
          ),
          take(1)
        )
        .subscribe();
    }
  }

  removeCategoryItem(id: number) {
    this.categoryFacade
      .deleteCategoryItems(id)
      .pipe(
        mergeMap((res) =>
          res.success && this.categoryId
            ? this.getCategoryItems(this.categoryId)
            : of(undefined)
        ),
        take(1)
      )
      .subscribe();
  }
}
