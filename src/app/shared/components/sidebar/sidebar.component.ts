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
    { title: 'О колледже', route: '' },
    { title: 'Учебная часть', route: '' },
    { title: 'Профессиональная практика', route: '' },
    { title: 'Социально-психологическая служба', route: '' },
    { title: 'Спорт', route: '' },
    { title: 'Молодежная политика', route: '' },
    { title: 'Профориентационная работа', route: '' },
    { title: 'Информация для родителей', route: '' },
    { title: 'Жас маман', route: '' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
