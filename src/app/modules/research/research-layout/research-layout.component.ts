import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { combineLatest, of, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IMiniResearch, IResearch } from 'src/app/core/models/research';
import { MiniResearchService } from 'src/app/core/services/mini-research.service';
import { ResearchService } from 'src/app/core/services/research.service';

@Component({
  selector: 'app-research-layout',
  templateUrl: './research-layout.component.html',
  styleUrls: ['./research-layout.component.scss']
})
export class ResearchLayoutComponent implements OnInit, OnDestroy {
  research!: IResearch;
  miniResearches: IMiniResearch[] = [];

  destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private researchService: ResearchService,
    private miniResearchService: MiniResearchService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => {
          const id = params.get('id');
          console.log(params, id);

          return id 
            ? combineLatest([
              this.researchService.getOneResearch(+id),
              this.miniResearchService.getOneMiniResearchByResearchId(+id)
            ])
            : of(null);
        })
      )
      .subscribe(response => {
        console.log('result', response);
        if (Array.isArray(response)) {
          this.research = response[0];
          this.miniResearches = response[1];
        }        
      });
    
    // this.title = this.route.snapshot.queryParamMap.get('title') || '';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
