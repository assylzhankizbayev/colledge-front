import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MenuFacade } from '../../../core/facade/menu.facade';
import { ISubmitResponse } from '../../../core/models/common.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menus$ = this.menuFacade.menus;
  isFormToggled = false;
  displayedColumns: string[] = ['title', 'description', 'controls'];
  titleLink = ['/menu', 'id', 'items'];

  constructor(
    private router: Router,
    private menuFacade: MenuFacade
  ) { }

  ngOnInit(): void {
    this.menuFacade.initMenus();
  }

  addMenu(data: any): void {
    this.menuFacade
      .addMenu(data)
      .pipe(
        tap((res: ISubmitResponse) => {
          if (res.success) {
            this.router.navigate(['/menu', res.id, 'items']);
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
    this.router.navigate(['/menu', id, 'edit']);
  }

  deleteMenu(id: number) {
    this.menuFacade.deleteMenu(id).subscribe();
  }

  toggleForm(): void {
    this.isFormToggled = !this.isFormToggled;
  }
}
