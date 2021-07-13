import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  programs = [
    { 
      id: 1, 
      title: 'Правоохранительная деятельность',
      img: 'security.jpg'
    },
    { 
      id: 2, 
      title: 'Международное право',
      img: 'international.jpg'
    },
    { 
      id: 3, 
      title: 'Финансы',
      img: 'finance.jpg'
    },
    { 
      id: 4, 
      title: 'Юриспруденция',
      img: 'law.jpg'
    },
    { 
      id: 5, 
      title: 'Таможенное дело',
      img: 'express.jpg'
    },
    { 
      id: 6, 
      title: 'Государственное и местное управление',
      img: 'team.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
