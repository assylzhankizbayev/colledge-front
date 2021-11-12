import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {
  specialties = [
    '0201000 Правоведение',
    '0202000 Правохранительная деятельность',
    '0501000 Социальная работа',
    '0513000 Маркетинг',
    '1516000 Пожарная безопасность',
    '1517000 Защита ЧС',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
