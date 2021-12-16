import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  links = [
    { title: 'Главная', route: '' },
    { title: 'Аккредитация', route: '' },
    { title: 'О колледже', route: '/about' },
    { title: 'Блог Директора', route: '' },
    { title: 'Учебно-методологическая работа', route: '' },
    { title: 'Воспитательная работа', route: '' },
    { title: 'Профориентационная работа', route: '' },
    { title: 'Информация для родителей', route: '' },
    { title: 'Профессиональная практика', route: '' },
    { title: 'Спортивные достижения', route: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
