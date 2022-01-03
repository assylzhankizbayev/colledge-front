import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/core/models/menu.model';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  links: IMenu[] = [
    // { title: 'Главная', route: '' },
    // { title: 'Аккредитация', route: '' },
    // { title: 'О колледже', route: '/about' },
    // { title: 'Блог Директора', route: '' },
    // { title: 'Учебно-методологическая работа', route: '' },
    // { title: 'Воспитательная работа', route: '' },
    // { title: 'Профориентационная работа', route: '' },
    // { title: 'Информация для родителей', route: '' },
    // { title: 'Профессиональная практика', route: '' },
    // { title: 'Спортивные достижения', route: '' },
  ];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuItemsById(2).subscribe((res) => {
      if (res.success) {
        this.links = res.result.map((item) => ({
          title: item.title,
          route: item.route || '',
        }));
      }
    });
  }
}

