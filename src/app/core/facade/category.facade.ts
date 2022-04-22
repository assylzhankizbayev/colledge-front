import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, mergeMap, take, tap } from 'rxjs/operators';
import { ICategoryItem, ICategoryItemRes } from '../models/category.model';
import { ISubmitResponse } from '../models/common.model';
import { CategoryService } from '../services/category.service';

@Injectable()
export class CategoryFacade {
  private category$ = new BehaviorSubject<any>(null);
  private categories$ = new BehaviorSubject<any>([]);
  private categoryItems$ = new BehaviorSubject<ICategoryItem[]>([]);

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {}

  get categories() {
    return this.categories$.asObservable();
  }

  get category() {
    return this.category$.asObservable();
  }

  get categoryItems() {
    return this.categoryItems$.asObservable();
  }

  initCategories() {
    this.getCategories().pipe(take(1)).subscribe();
  }

  initCategoryItems(categoryId: number) {
    this.getCategoryItemsOf(categoryId).subscribe();
  }

  addCategory(data: any) {
    return this.categoryService.addCategory(data).pipe(
      tap((res: ISubmitResponse) => {
        if (res.success) {
          this.router.navigate(['/category', res.id, 'items']);
        }
      }),
      catchError((err) => {
        console.log(err);

        return of(err);
      })
    );
  }

  getCategories(): Observable<any> {
    return this.categoryService.getCategories().pipe(
      take(1),
      tap((categories: any) => {
        if (categories.success) {
          this.categories$.next(categories.result);
        }
      })
    );
  }

  getCategory(id: number) {
    return this.categoryService.getCategory(id).pipe(
      take(1),
      tap((category) => {
        if (category.success) {
          this.category$.next(category.result);
        }
      })
    );
  }

  updateCategory(id: number, data: any) {
    return this.categoryService.updateCategory(id, data).pipe(
      tap((category) => {
        if (category.success) {
          this.router.navigate(['/category']);
        }
      }),
      take(1)
    );
  }

  deleteCategory(id: number) {
    return this.categoryService.deleteCategory(id).pipe(
      mergeMap((category) => {
        return category.success ? this.getCategories() : of(null);
      }),
      take(1)
    );
  }

  getCategoryItemsOf(categoryId: number): Observable<ICategoryItemRes> {
    return this.categoryService.getCategoryItemsOf(categoryId).pipe(
      take(1),
      tap((categoryItems: ICategoryItemRes) => {
        if (categoryItems.success) {
          this.categoryItems$.next(categoryItems.result);
        }
      })
    );
  }

  addCategoryItem(categoryId: number, data: any) {
    return this.categoryService.addCategoryItem(categoryId, data);
  }

  updateCategoryItem(id: number, data: any) {
    return this.categoryService.updateCategoryItem(id, data);
  }

  deleteCategoryItems(id: number) {
    return this.categoryService.deleteCategoryItem(id);
  }
}
