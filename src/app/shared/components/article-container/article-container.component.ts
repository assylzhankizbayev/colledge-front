import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { IMenu } from '../../../core/models/menu.model';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss'],
})
export class ArticleContainerComponent implements OnInit, OnDestroy {
  menuList: IMenu[] = [];
  destroy$ = new Subject();

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService
      .getSidebarMenu()
      .pipe(
        tap((menu) => {
          this.menuList = menu;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
