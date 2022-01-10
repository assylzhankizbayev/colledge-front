import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { IMenu, IMenuItem } from '../models/menu.model';
import { MenuService } from '../services/menu.service';

@Injectable()
export class MenuFacade {
  constructor(private menuServce: MenuService) {}

  get headerMenu(): Observable<IMenu[]> {
    return this.menuServce.getMenuItemsById(1).pipe(
      filter((res) => res?.success),
      map((res) => this.generateMenu(res.result)),
      catchError(() => of([])),
      tap((menu) => console.log(menu))
    );
  }

  get secondaryMenu(): Observable<IMenu[]> {
    return this.menuServce.getMenuItemsById(6).pipe(
      filter((res) => res?.success),
      map((res) => this.generateMenu(res.result)),
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
