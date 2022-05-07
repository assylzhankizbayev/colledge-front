import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { MenuFacade } from '../../../../core/facade/menu.facade';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss']
})
export class MenuEditComponent implements OnInit {
  menu$ = this.menuFacade.menu;
  menuId: number | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private menuFacade: MenuFacade
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      mergeMap((params: ParamMap) => {
        const menuId = params.get('menuId');
        this.menuId = menuId ? +menuId : null;
        return this.menuId ? this.menuFacade.getMenu(this.menuId) : of(null);
      })
    )
    .subscribe();
  }

  updateMenu(data: number) {
    if (this.menuId) {
      this.menuFacade.updateMenu(this.menuId, data).subscribe()
    }
  }

  cancel() {
    this.router.navigate(['/admin/menu']);
  }
}
