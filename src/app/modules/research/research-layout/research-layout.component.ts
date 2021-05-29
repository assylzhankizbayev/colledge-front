import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IResearch } from 'src/app/core/models/research';
import { ResearchService } from 'src/app/core/services/research.service';

@Component({
  selector: 'app-research-layout',
  templateUrl: './research-layout.component.html',
  styleUrls: ['./research-layout.component.scss']
})
export class ResearchLayoutComponent implements OnInit, OnDestroy {

  title = '';
  researches: IResearch[] = [];
  destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private researchService: ResearchService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => {
          const id = params.get('id');
          console.log(params, id);

          return id ? this.researchService.getOneResearch(+id) : of(null)
        })
      )
      .subscribe(response => {
        console.log('result', response);
        
      });
    
    this.title = this.route.snapshot.queryParamMap.get('title') || '';

    // this.researchService.getOneResearch(10).subscribe(response => (this.researches = response));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
