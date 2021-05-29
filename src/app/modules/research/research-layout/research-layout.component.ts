import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { combineLatest, forkJoin, of, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { IMiniResearch, IResearch } from 'src/app/core/models/research';
import { CommonService } from 'src/app/core/services/common.service';
import { MiniResearchService } from 'src/app/core/services/mini-research.service';
import { ResearchService } from 'src/app/core/services/research.service';
import { IIndustry, IIndustryEx } from '../../landing/interface';

@Component({
  selector: 'app-research-layout',
  templateUrl: './research-layout.component.html',
  styleUrls: ['./research-layout.component.scss']
})
export class ResearchLayoutComponent implements OnInit, OnDestroy {
  research!: IResearch;
  miniResearches: IMiniResearch[] = [];
  loading = true;

  researchList: IResearch[] = [];
  industries: IIndustry[] = [];
  industriesEx: IIndustryEx[] = [];
  destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private service: CommonService,
    private researchService: ResearchService,
    private miniResearchService: MiniResearchService,
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.route.paramMap
      .pipe(
        debounceTime(500),
        takeUntil(this.destroy$),
        switchMap(params => {
          const id = params.get('id');

          return id 
            ? combineLatest([
              this.researchService.getOneResearch(+id),
              this.miniResearchService.getOneMiniResearchByResearchId(+id)
            ])
            : of(null);
        })
      )
      .subscribe(response => {
        if (Array.isArray(response)) {
          this.research = response[0];
          this.miniResearches = response[1];
          this.loading = false;
        } else {

        }    
      });
  }

  loadData() {
    this.loading = true;
    forkJoin([
      this.service.getIndustries(),
      this.researchService.getResearch()
    ])
    .subscribe(res => {
      this.industries = res[0];
      // this.industries.unshift(this.selectedIndustrie);
      this.researchList = res[1];
      this.transformData(this.researchList);
      setTimeout(() => {
        this.loading = false;
      }, 500);
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
