import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap, switchMap, take } from 'rxjs/operators';
import { ISubmitResponse } from '../../../../core/models/common.model';
import { CategoryFacade } from '../../../../core/facade/category.facade';
import { CategoryItemModalComponent } from '../category-item-modal/category-item-modal.component';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  categoryItems$ = this.categoryFacade.categoryItems;
  displayedColumns: string[] = [
    'id',
    'title',
    'parentCategoryItemId',
    'orderIdx',
    'controls',
  ];
  categoryId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private categoryFacade: CategoryFacade,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const categoryId = params.get('categoryId');
          this.categoryId = categoryId ? +categoryId : null;

          return this.categoryId
            ? this.getCategoryItems(this.categoryId)
            : of(undefined);
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
}
