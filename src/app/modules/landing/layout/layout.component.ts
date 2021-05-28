import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { IIndustry } from '../interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  industries: IIndustry[] = [];
  selectedLabId: number = 0;

  research = [
    { id: 1, name: 'Минералогические исследования' },
    { id: 2, name: 'Петрографические исследования' },
    { id: 3, name: 'Литологические исследования с рудным микроскопом ' },
    { id: 4, name: 'Моделирование месторождений полезных ископаемых' },
    { id: 5, name: 'Определение химического состава минеральных образований' },
    { id: 6, name: 'Петрофизический анализ керна' },
  ];

  constructor(
    private service: CommonService,
  ) { }

  ngOnInit(): void {
    this.service.getIndustries().subscribe(res => {
      this.industries = res;
      this.industries.unshift({ id: 0, name: 'Все' });
      console.log(res);
    });
  }

  
  selectLab(lab: IIndustry) {
    this.selectedLabId = lab.id;
  }

  goResearch(item: any) {
    
  }

}
