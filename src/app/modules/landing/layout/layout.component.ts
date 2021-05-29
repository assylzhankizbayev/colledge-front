import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
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
  selectedIndustrie: IIndustry = { id: -1, name: 'Все' };

  research: IResearch[] = [];

  constructor(
    private service: CommonService,
    private researchService: ResearchService,
  ) { }

  ngOnInit(): void {

    forkJoin([
      this.service.getIndustries(),
      this.researchService.getResearch()
    ])
    .subscribe(res => {
      this.industries = res[0];
      this.industries.unshift(this.selectedIndustrie);
      this.research = res[1];
    });
  }

  
  selectIndustrie(ind: IIndustry) {
    this.selectedIndustrie = ind;
    this.researchService.getResearchByIndId(ind.id).subscribe(res => {
      this.research = res;
    });
  }

  goResearch(item: any) {
    
  }

}
