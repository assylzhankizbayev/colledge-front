import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ENV } from '../../app.token';
import { IEnvironment } from '../models/environments.model';
import {
  IMenu,
  IMenuItem,
  IMenuItemRes,
  IMenuParent,
  IMenuResponse,
  MenuIds,
} from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(
    private http: HttpClient,
    @Inject(ENV) private env: IEnvironment
  ) {}

  // MENU REQUESTS
  addMenu(data: any): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(this.env.host + '/menu', data);
  }

  getMenus(): Observable<any[]> {
    return this.http.get<any[]>(this.env.host + '/menu');
  }

  getMenu(id: number): Observable<IMenuResponse<IMenuParent>> {
    return this.http.get<IMenuResponse<IMenuParent>>(
      this.env.host + `/menu/${id}`
    );
  }

  updateMenu(id: number, data: any): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(
      this.env.host + `/menu/${id}`,
      data
    );
  }

  deleteMenu(id: number) {
    return this.http.delete<{ success: boolean; error: string }>(
      this.env.host + `/menu/${id}`
    );
  }

  // MENU ITEMS REQUESTS
  getMenuItemsById(id: number): Observable<IMenuItemRes> {
    return this.http.get<IMenuItemRes>(this.env.host + `/menu/${id}/item`);
  }

  getMenuItemsOf(menuId: number): Observable<IMenuItemRes> {
    return this.http.get<IMenuItemRes>(this.env.host + `/menu/${menuId}/item`);
  }

  addMenuItem(menuId: number, data: any): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(
      this.env.host + `/menu/${menuId}/item`,
      data
    );
  }

  updateMenuItem(id: number, data: any): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(
      this.env.host + `/menu/item/${id}`,
      data
    );
  }

  deleteMenuItem(id: number): Observable<{ success: boolean; error: string }> {
    return this.http.delete<{ success: boolean; error: string }>(
      this.env.host + `/menu/item/${id}`
    );
  }

  menuItemsMapping = (res: IMenuItemRes) => {
    return res.success
      ? ((res.result as IMenuItem[]).map((item) => ({
          title: item.title,
          route: item.route || '',
          articleId: item.article_id,
        })) as IMenu[])
      : [];
  };

  getSidebarMenu() {
    return this.getMenuItemsById(MenuIds.Sidebar).pipe(
      map(this.menuItemsMapping)
    );
  }

  getGalleryMenu() {
    return this.getMenuItemsById(MenuIds.Gallery).pipe(
      map(this.menuItemsMapping)
    );
  }
}
