import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abiturients',
  templateUrl: './abiturients.component.html',
  styleUrls: ['./abiturients.component.scss']
})
export class AbiturientsComponent implements OnInit {
  articles = [
    { title: 'Как осуществляется прием в колледжи на новый учебный год?' },
    { title: 'College SmartNation - Прием документов на зачисление' },
    { title: 'Правильно выбранная профессия - яркий залог будущего' },
    { title: 'Информация для абитуриентов вопросы ответы' },
    { title: 'АБИТУРИЕНТ 2021!' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
