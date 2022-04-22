import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent implements OnInit {
  programs = [
    {
      id: 1,
      title: 'Успешное трудоустройство',
      img: 'career.png',
    },
    {
      id: 2,
      title: 'Курсы английского языка, казахского языка',
      img: 'english.jpg',
    },
    {
      id: 3,
      title: 'Спортивные секции, тренажерный зал',
      img: 'gym.jpg',
    },
    {
      id: 4,
      title: 'Бесплатная юридическая консультация',
      img: 'law.jpg',
    },
    {
      id: 5,
      title: 'Гибкая система оплаты за обучение',
      img: 'payment.jpg',
    },
    {
      id: 6,
      title: 'Общежитие',
      img: 'dormitory.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
