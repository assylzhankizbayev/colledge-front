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
    { id: 1, name: 'Поступление', router: 'onboarding', isClick: true },
    { id: 2, name: 'Об колледже', router: 'about', isClick: true },
    { id: 3, name: 'Специальности', router: 'specialties', isClick: true },
    { id: 4, name: 'Кафедры', router: 'cafedras', isClick: true },
    { id: 5, name: 'Контакты', router: 'contacts', isClick: true },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
