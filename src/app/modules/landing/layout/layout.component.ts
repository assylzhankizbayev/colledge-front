import { Component, OnInit } from '@angular/core';
import { ILab } from '../interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  labs: ILab[] = [
    { id: 1, name: 'Все' },
    { id: 2, name: 'Горнодобывающая' },
    { id: 3, name: 'Нефтегаз' },
    { id: 4, name: 'Геодезия&nbsp;картография' },
    { id: 5, name: 'Горно&nbsp;-&nbsp;металлургическая' },
    { id: 6, name: 'Прикладная&nbsp;механика' },
  ];
  selectedLabId = this.labs[0].id;

  research = [
    { id: 1, name: 'Минералогические исследования' },
    { id: 2, name: 'Петрографические исследования' },
    { id: 3, name: 'Литологические исследования с рудным микроскопом ' },
    { id: 4, name: 'Моделирование месторождений полезных ископаемых' },
    { id: 5, name: 'Определение химического состава минеральных образований' },
    { id: 6, name: 'Петрофизический анализ керна' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
  selectLab(lab: ILab) {
    this.selectedLabId = lab.id;
  }

  goResearch(item: any) {
    
  }

}
