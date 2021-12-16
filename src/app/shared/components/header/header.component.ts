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
    {
      name: 'О колледже',
      router: '/about',
      isClick: true,
      subMenu: [
        // {
        //   name: 'Структура', router: '/college-structure', isClick: true
        // }
      ],
    },
    { name: 'Достижения', router: '/achievements', isClick: true },
    { name: 'Лицензии', router: '/licence', isClick: true },
    { name: 'Контакты', router: '/contacts', isClick: true },
  ];

  subMenu: IMenu[] = [
    { name: 'Абитуриентам', router: '/for-abiturients', isClick: true },
    { name: 'Специальности', router: '/specialties', isClick: true },
    { name: 'Галерея', router: '', isClick: false },
    { name: 'Новости', router: '/news', isClick: true },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
