import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsClientComponent implements OnInit {
  news = [
    {
      id: 1,
      title: 'Колледж им. Д.А. Кунаева вошел в рейтинг The Times Higher Education',
    },
    {
      id: 2,
      title: 'Колледж им. Д.А. Кунаева продолжает расти в рейтинге QS World University Rankings',
    },
    {
      id: 3,
      title: 'Колледж им. Д.А. Кунаева предлагает дополнительные льготы для вакцинированных студентов и сотрудников',
    },
    {
      id: 4,
      title: 'Колледж им. Д.А. Кунаева – открытая дверь в мир новых возможностей',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
