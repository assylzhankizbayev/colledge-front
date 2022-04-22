import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achevements-pics',
  templateUrl: './achevements-pics.component.html',
  styleUrls: ['./achevements-pics.component.scss']
})
export class AchevementsPicsComponent implements OnInit {
  achievements = [
    { title: 'Достижения колледжа', src: './assets/pics/achievements/college-achievements.jpg' },
    { title: 'Достижения руководителя', src: './assets/pics/achievements/directors-achievements.jpg' },
    { title: 'Достижения преподавателей', src: './assets/pics/achievements/teachers-achievements.jpg' },
    { title: 'Достижения студентов', src: './assets/pics/achievements/students-achievements.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
