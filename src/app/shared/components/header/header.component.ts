import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../../modules/main/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isChecked = false;

  menu: IMenu[] = [
    { id: 1, name: 'О колледже', router: '/about', isClick: true },
    { id: 2, name: 'Достижения', router: '/achievements', isClick: true },
    { id: 3, name: 'Лицензии', router: '/licence', isClick: true },
    { id: 5, name: 'Контакты', router: '/contacts', isClick: true },
  ];

  subMenu: IMenu[] = [
    { id: 1, name: 'Абитуриентам', router: '/for-abiturients', isClick: true },
    { id: 2, name: 'Специальности', router: '/specialties', isClick: true },
    { id: 3, name: 'Галерея', router: '', isClick: false },
    { id: 4, name: 'Новости', router: '/news', isClick: true },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
