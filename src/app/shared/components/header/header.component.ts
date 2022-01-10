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
  headerMenu$ = this.menuFacade.headerMenu;
  secondaryMenu$ = this.menuFacade.secondaryMenu;
  rootLink: IMenu[] = [
    {
      title: 'Главная',
      route: '/',
    },
  ];

  constructor(private menuFacade: MenuFacade) {}

  ngOnInit(): void {}

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
