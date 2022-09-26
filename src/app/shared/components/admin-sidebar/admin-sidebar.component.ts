import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss'],
})
export class AdminSidebarComponent {
  routes = [
    { title: 'Категории', router: '/admin/category' },
    { title: 'Меню', router: '/admin/menu' },
    { title: 'Материалы', router: '/admin/article' },
    { title: 'Лицензии', router: '/admin/licence' },
    { title: 'Новости', router: '/admin/news' },
    { title: 'Часто задаваемые вопросы', router: '/admin/faq' },
  ];
}
