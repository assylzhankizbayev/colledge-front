import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-sidebar',
  templateUrl: './news-sidebar.component.html',
  styleUrls: ['./news-sidebar.component.scss']
})
export class NewsSidebarComponent implements OnInit {
  months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
