import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, take, tap } from 'rxjs/operators';
import {
  IMenu,
  IMenuItem,
  IMenuItemF,
  IMenuItemRes,
} from '../models/menu.model';
import { MenuService } from '../services/menu.service';

@Injectable()
export class MenuFacade {
  private menu$ = new BehaviorSubject<any>([]);
  private menus$ = new BehaviorSubject<any>([]);
  private menuItems$ = new BehaviorSubject<IMenuItemF[]>([]);

  constructor(private router: Router, private menuService: MenuService) {}

  get menus() {
    return this.menus$.asObservable();
  }

  get menu() {
    return this.menu$.asObservable();
  }

  get menuItems() {
    return this.menuItems$.asObservable();
  }

  initMenus() {
    this.getMenus().pipe(take(1)).subscribe();
  }

  initMenuItems(menuId: number) {
    this.getMenuItemsOf(menuId).subscribe();
  }

  getMenus(): Observable<any> {
    return this.menuService.getMenus().pipe(
      take(1),
      tap((menus: any) => {
        if (menus.success) {
          this.menus$.next(menus.result);
        }
      })
    );
  }

  addMenu(data: any) {
    return this.menuService.addMenu(data);
  }

  getMenu(id: number): Observable<any> {
    return this.menuService.getMenu(id).pipe(
      take(1),
      tap((menu: any) => {
        if (menu.success) {
          this.menu$.next(menu.result);
        }
      })
    );
  }

  getMenuItemsOf(menuId: number): Observable<IMenuItemRes> {
    return this.menuService.getMenuItemsOf(menuId).pipe(
      take(1),
      tap((menuItems) => {
        if (menuItems.success) {
          const result = menuItems.result as IMenuItem[];
          const items: IMenuItemF[] = result.map((item) => ({
            ...item,
            articleId: item.article_id,
            orderIdx: item.order_idx,
            parentMenuId: item.parent_menu_id,
            parentMenuItemId: item.parent_menu_item_id,
          }));

          this.menuItems$.next(items);
        }
      })
    );
  }

  addMenuItem(menuId: number, data: any) {
    return this.menuService.addMenuItem(menuId, data);
  }

  updateMenu(id: number, data: any) {
    return this.menuService.updateMenu(id, data).pipe(
      mergeMap((menu) => {
        if (menu?.success) {
          this.router.navigate(['/menu']);
          return this.getMenus();
        }
        return of(null);
      }),
      take(1)
    );
  }

  updateMenuItem(id: number, data: any) {
    return this.menuService.updateMenuItem(id, data);
  }

  deleteMenu(id: number) {
    return this.menuService.deleteMenu(id).pipe(
      mergeMap((menu) => {
        return menu?.success ? this.getMenus() : of(null);
      }),
      take(1)
    );
  }

  deleteMenuItem(id: number) {
    return this.menuService.deleteMenuItem(id);
  }

  get headerMenu(): Observable<IMenu[]> {
    return this.menuService.getMenuItemsById(1).pipe(
      filter((res) => res?.success),
      map((res) => this.generateMenu(res.result as IMenuItem[])),
      catchError(() => of([])),
      tap((menu) => console.log(menu))
    );
  }

  get secondaryMenu(): Observable<IMenu[]> {
    return this.menuService.getMenuItemsById(6).pipe(
      filter((res) => res?.success),
      map((res) => this.generateMenu(res.result as IMenuItem[])),
      catchError(() => of([])),
      tap((menu) => console.log(menu))
    );
  }

  private generateMenu(menu: IMenuItem[]): IMenu[] {
    const parentMenus = menu
      .filter((menuItem) => menuItem.parent_menu_item_id == null)
      .map((menuItem) => ({
        id: menuItem.id,
        title: menuItem.title,
        route: menuItem.route,
        articleId: menuItem.article_id,
        subMenu: [] as IMenu[],
      }));

    menu
      .filter((menuItem) => menuItem.parent_menu_item_id != null)
      .forEach((menuItem) => {
        const parent = parentMenus.find(
          (pMenu) => pMenu.id === menuItem.parent_menu_item_id
        );

        if (parent) {
          parent.subMenu.push({
            title: menuItem.title,
            route: menuItem.route,
            articleId: menuItem.article_id,
          });
        }
      });

    return parentMenus;
  }
}
