import { Component, OnInit } from '@angular/core';
import { IResearch } from 'src/app/core/models/research';
import { CommonService } from 'src/app/core/services/common.service';
import { ResearchService } from 'src/app/core/services/research.service';
import { IIndustry } from '../interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  industries: IIndustry[] = [];
  selectedIndustrieId: number = 0;

  research: IResearch[] = [];

  constructor(
    private service: CommonService,
    private researchService: ResearchService,
  ) { }

  ngOnInit(): void {
    this.service.getIndustries().subscribe(res => {
      this.industries = res;
      this.industries.unshift({ id: -1, name: 'Все' });
      console.log(res);
    });

    this.researchService.getResearch().subscribe(res => {
      this.research = res;
      console.log(this.research);
    });
  }

  
  selectIndustrie(ind: IIndustry) {
    this.selectedIndustrieId = ind.id;
    this.researchService.getResearchByIndId(ind.id).subscribe(res => {
      console.log(res);
    });
  }

  goResearch(item: any) {
    
  }

}
