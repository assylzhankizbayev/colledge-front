import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/core/models/menu.model';
import { MenuFacade } from '../../../core/facade/menu.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isChecked = false;
  menu$ = this.menuFacade.headerMenu;

  subMenu: IMenu[] = [
    { title: 'Абитуриентам', route: '/for-abiturients' },
    { title: 'Специальности', route: '/specialties' },
    { title: 'Галерея', route: '' },
    { title: 'Новости', route: '/news' },
  ];

  constructor(private menuFacade: MenuFacade) {}

  ngOnInit(): void {}

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
