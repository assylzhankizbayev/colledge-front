import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../../modules/landing/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isChecked = false;

  menu: IMenu[] = [
    { id: 1, name: 'Главная', router: 'main', isClick: true },
    { id: 2, name: 'Исследования', router: 'research' },
    { id: 3, name: 'Лаборатории', router: 'labs' },
    { id: 4, name: 'Специалисты', router: 'experts' },
    { id: 5, name: 'Оборудование', router: 'equipment' },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
