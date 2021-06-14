import { Component, HostListener, OnInit } from '@angular/core';
import { IMenu } from '../../../modules/landing/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isChecked = false;

  menu: IMenu[] = [
    { id: 1, name: 'Главная', router: 'main', isClick: true },
    { id: 2, name: 'Исследования', router: 'research' },
    { id: 3, name: 'Лаборатории', router: 'labs', isClick: true },
    { id: 4, name: 'Специалисты', router: 'experts' },
    { id: 5, name: 'Оборудование', router: 'equipment' },
  ];

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
     if (window.pageYOffset > 350) {
       let element = document.getElementById('navbar');
       let navMenu = document.getElementById('nav-mobile');
       if (element) element.classList.add('sticky');
       if (navMenu) navMenu.classList.add('change-bg');
     } else {
      let element = document.getElementById('navbar');
      let navMenu = document.getElementById('nav-mobile');
      if (element) element.classList.remove('sticky'); 
      if (navMenu) navMenu.classList.remove('change-bg');
     }
  }

  toggle() {
    this.isChecked = !this.isChecked;
  }
}
