import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { ISubmitResponse } from '../../../../core/models/common.model';
import { MenuFacade } from '../../../../core/facade/menu.facade';
import { ArticleFacade } from '../../../../core/facade/article.facade';
import { MenuItemModalComponent } from '../menu-item-modal/menu-item-modal.component';

@Component({
  selector: 'app-menu-items-list',
  templateUrl: './menu-items-list.component.html',
  styleUrls: ['./menu-items-list.component.scss'],
})
export class MenuItemsListComponent implements OnInit {
  menuId: number | null = null;
  menuItems$ = this.menuFacade.menuItems;
  displayedColumns: string[] = [
    'title',
    'articleId',
    'route',
    'parentMenuItemId',
    'orderIdx',
    'controls',
  ];
  articlesList: { id: number; title: string }[] = [];

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private menuFacade: MenuFacade,
    private articleFacade: ArticleFacade
  ) {}

  ngOnInit(): void {
    this.getArticles();

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const menuId = params.get('menuId');
          this.menuId = menuId ? +menuId : null;

          return this.menuId ? this.getMenuItems(this.menuId) : of(undefined);
        })
      )
      .subscribe();
  }

  private getArticles(): void {
    this.articleFacade
      .getArticles()
      .pipe(
        tap((res) => {
          if (res?.success) {
            this.articlesList = res.result.map((item: any) => ({
              id: item.id,
              title: item.title
            }));
          }
        })
      )
      .subscribe();
  }

  getMenuItems(menuId: number) {
    return this.menuFacade.getMenuItemsOf(menuId);
  }

  addMenuItem() {
    this.dialog
      .open(MenuItemModalComponent, {
        panelClass: 'custom-dialog-container',
        data: {
          articlesList: this.articlesList
        },
        width: '450px',
      })
      .afterClosed()
      .pipe(
        take(1),
        mergeMap((data) =>
          this.menuId && data
            ? this.menuFacade.addMenuItem(this.menuId, data)
            : of(undefined)
        ),
        mergeMap((response: ISubmitResponse | undefined) =>
          response?.success && this.menuId
            ? this.getMenuItems(this.menuId)
            : of(undefined)
        )
      )
      .subscribe();
  }

  editMenuItem(id: number, menu: any[]) {
    const menuItem = menu.find((item) => item.id === id);

    if (menuItem) {
      this.dialog
        .open(MenuItemModalComponent, {
          panelClass: 'custom-dialog-container',
          data: {
            menuItem,
            articlesList: this.articlesList
          },
          width: '450px',
        })
        .afterClosed()
        .pipe(
          mergeMap((data) =>
            data ? this.menuFacade.updateMenuItem(id, data) : of(undefined)
          ),
          mergeMap((response: ISubmitResponse | undefined) =>
            response?.success && this.menuId
              ? this.getMenuItems(this.menuId)
              : of(undefined)
          ),
          take(1)
        )
        .subscribe();
    }
  }

  deleteMenuItem(id: number) {
    this.menuFacade
      .deleteMenuItem(id)
      .pipe(
        mergeMap((res) =>
          res.success && this.menuId
            ? this.getMenuItems(this.menuId)
            : of(undefined)
        ),
        take(1)
      )
      .subscribe();
  }
}
