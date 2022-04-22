import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ICategoryItemRes,
  ICategoryRemoveRes,
  ICategoryRes,
} from '../models/category.model';
import { ENV } from '../../app.token';
import { IEnvironment } from '../models/environments.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  addCategory(data: any): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      this.env.host + '/category',
      data
    );
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.env.host + '/category');
  }

  getCategory(id: number): Observable<ICategoryRes> {
    return this.http.get<ICategoryRes>(this.env.host + `/category/${id}`);
  }

  updateCategory(id: number, data: any): Observable<ICategoryRes> {
    return this.http.put<ICategoryRes>(this.env.host + `/category/${id}`, data);
  }

  deleteCategory(id: number): Observable<ICategoryRemoveRes> {
    return this.http.delete<ICategoryRemoveRes>(
      this.env.host + `/category/${id}`
    );
  }

  addCategoryItem(
    categoryId: number,
    data: any
  ): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      this.env.host + `/category/${categoryId}/item`,
      data
    );
  }

  getCategoryItemsOf(categoryId: number): Observable<ICategoryItemRes> {
    return this.http.get<ICategoryItemRes>(
      this.env.host + `/category/${categoryId}/item`
    );
  }

  updateCategoryItem(id: number, data: any): Observable<ICategoryRes> {
    return this.http.put<ICategoryRes>(
      this.env.host + `/category/item/${id}`,
      data
    );
  }

  deleteCategoryItem(id: number): Observable<ICategoryRemoveRes> {
    return this.http.delete<ICategoryRemoveRes>(
      this.env.host + `/category/item/${id}`
    );
  }
}
