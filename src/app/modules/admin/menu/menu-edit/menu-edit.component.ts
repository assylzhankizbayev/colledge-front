import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { MenuFacade } from '../../../../core/facade/menu.facade';
import { IBreadcumbRoute } from '../../../../core/models/route.model';
import { BreadcrumbsService } from '../../../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss'],
})
export class MenuEditComponent implements OnInit {
  menu$ = this.menuFacade.menu;
  menuId: number | null = null;
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Меню', route: '/admin/menu' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuFacade: MenuFacade,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const menuId = params.get('menuId');
          this.menuId = menuId ? +menuId : null;
          return this.menuId ? this.menuFacade.getMenu(this.menuId) : of(null);
        }),
        tap((res) => {
          if (res?.success) {
            const route: IBreadcumbRoute = {
              title: res?.result.title || '',
              route: null,
            };
            this.breadcrumbsService.addRoute(route);
          }
        })
      )
      .subscribe();
  }

  updateMenu(data: number) {
    if (this.menuId) {
      this.menuFacade.updateMenu(this.menuId, data).subscribe();
    }
  }

  cancel() {
    this.router.navigate(['/admin/menu']);
  }
}
