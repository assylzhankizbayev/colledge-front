import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent {
  routes = [
    { title: 'Главная', router: '/' },
    { title: 'Категории', router: '/category' },
    { title: 'Меню', router: '/menu' },
    { title: 'Материалы', router: '/article' },
    { title: 'О колледже', router: '/about' },
    { title: 'Достижения', router: '/achievements' },
    { title: 'Лицензии', router: '/licence' },
    { title: 'Новости', router: '/news' },
  ];
}
