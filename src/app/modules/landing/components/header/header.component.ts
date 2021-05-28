import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: IMenu[] = [
    { id: 1, name: 'Главная', router: 'main' },
    { id: 2, name: 'Лаборатории', router: 'labs' },
    { id: 3, name: 'Об университете', router: 'about' },
    { id: 4, name: 'Контакты', router: 'contacts' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
