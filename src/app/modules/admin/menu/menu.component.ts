import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MenuFacade } from '../../../core/facade/menu.facade';
import { IBreadcumbRoute } from '../../../core/models/route.model';
import { ISubmitResponse } from '../../../core/models/common.model';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menus$ = this.menuFacade.menus;
  isFormToggled = false;
  displayedColumns: string[] = ['title', 'description', 'controls'];
  titleLink = ['/admin', 'menu', 'id', 'items'];
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Меню', route: '/admin/menu' },
  ];

  constructor(
    private router: Router,
    private menuFacade: MenuFacade,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.menuFacade.initMenus();
  }

  addMenu(data: any): void {
    this.menuFacade
      .addMenu(data)
      .pipe(
        tap((res: ISubmitResponse) => {
          if (res.success) {
            this.router.navigate(['/admin', 'menu', res.id, 'items']);
          }
        }),
        catchError((err) => {
          console.log(err);

          return of(err);
        })
      )
      .subscribe();
  }

  editMenu(id: number) {
    this.router.navigate(['/admin', 'menu', id, 'edit']);
  }

  deleteMenu(id: number) {
    this.menuFacade.deleteMenu(id).subscribe();
  }

  toggleForm(): void {
    this.isFormToggled = !this.isFormToggled;
  }
}
