import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { combineLatest, forkJoin, of, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { IMiniResearch, IResearch } from 'src/app/core/models/research';
import { CommonService } from 'src/app/core/services/common.service';
import { MiniResearchService } from 'src/app/core/services/mini-research.service';
import { ResearchService } from 'src/app/core/services/research.service';
import { IIndustry } from '../../landing/interface';

@Component({
  selector: 'app-research-layout',
  templateUrl: './research-layout.component.html',
  styleUrls: ['./research-layout.component.scss']
})
export class ResearchLayoutComponent implements OnInit, OnDestroy {
  research!: IResearch;
  miniResearches: IMiniResearch[] = [];
  loading = false;
  isMenuToggled = false;
  researchList: IResearch[] = [];
  chosenResearchList: IResearch[] = [];
  industries: IIndustry[] = [];
  chosenIndustry?: IIndustry;
  destroy$ = new Subject();

  industrieId: number;
  researchId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CommonService,
    private researchService: ResearchService,
    private miniResearchService: MiniResearchService,
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.loading = true;


    this.route.paramMap
      .pipe(
        debounceTime(500),
        takeUntil(this.destroy$),
        switchMap(params => {
          console.log(params);

          const id = params.get('id');
          if (id) this.researchId = +id;

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
          this.loadData();
        }   
      });
  }

  loadData() {

    forkJoin([
      this.service.getIndustries(),
      this.researchService.getResearch()
    ])
    .subscribe(res => {
      this.industries = res[0];
      this.researchList = res[1];
      this.industrieId = this.researchList.find(f => f.id === this.researchId)?.industrieId || 0;
      this.chosenResearchList = this.researchList.filter(f => f.industrieId === this.industrieId);
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

  toggleIndustry() {
    this.isMenuToggled = !this.isMenuToggled;
  }

  updateResearchList(industry: IIndustry) {
    this.chosenResearchList = this.researchList.filter(r => r.industrieId === industry.id);
    this.toggleIndustry();
  }

  changeResearch(research: IResearch) {
    this.chosenResearchList.forEach(r => (r.active = false));
    research.active = true;
    this.router.navigate(['/research', research.id]);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
