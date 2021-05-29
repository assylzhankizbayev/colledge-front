import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { IResearch } from 'src/app/core/models/research';
import { CommonService } from 'src/app/core/services/common.service';
import { ResearchService } from 'src/app/core/services/research.service';
import { IIndustry, IIndustryEx } from '../interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  searchControl = new FormControl();
  industries: IIndustry[] = [];
  selectedIndustrie: IIndustry = { id: -1, name: 'Все' };
  research: IResearch[] = [];
  industriesEx: IIndustryEx[] = [];
  noData = false;
  loading = false;

  constructor(
    private service: CommonService,
    private researchService: ResearchService,
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);

    this.searchControl.valueChanges
    .pipe(
      tap(_ => {
        this.loading = true;
      }),
      debounceTime(500)
    )
    .subscribe(res => {
      let searchText = res.toLocaleLowerCase();
      this.industriesEx.forEach(ind => {
        ind.research.forEach(res2 => {
          res2.hide = !res2.name.toLocaleLowerCase().includes(searchText);
        });
        ind['hide'] = ind.research.length === ind.research.filter(f => f.hide).length ? true : false;
      });
      this.noData = this.industriesEx.length === this.industriesEx.filter(f => f.hide).length ? true : false;
      this.loading = false;
    });

    this.loadData();

    
  }

  loadData() {
    this.loading = true;
    forkJoin([
      this.service.getIndustries(),
      this.researchService.getResearch()
    ])
    .subscribe(res => {
      this.industries = res[0];
      this.industries.unshift(this.selectedIndustrie);
      this.research = res[1];
      this.transformData(this.research);
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

  
  selectIndustrie(ind: IIndustry) {
    this.selectedIndustrie = ind;
    this.loading = true;
    this.researchService.getResearchByIndId(ind.id).subscribe(res => {
      if (ind.id === -1) {
        this.transformData(res);
      } else {
        this.industriesEx = [{
            id: ind.id,
            name: ind.name,
            research: res
        }];
      }
      setTimeout(() => {
        this.loading = false;
      }, 300);
    });
  }

  transformData(research: IResearch[]) {
    this.industriesEx = this.industries.map(r => {
      let data = research.filter(f => f.industrieId === r.id);
      return {
        id:r.id,
        name:r.name,
        research: data
      }
    });
  }

  goResearch(item: any) {
    
  }

}

