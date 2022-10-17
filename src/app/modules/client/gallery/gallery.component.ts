import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { IMenu } from 'src/app/core/models/menu.model';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit, OnDestroy {
  menuList: IMenu[] = [];
  destroy$ = new Subject();

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService
      .getGalleryMenu()
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
