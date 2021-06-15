import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { ILabExperts } from '../../../core/models/lab';
import { LabService } from '../../../core/services/lab.service';
import { ExpertService } from '../../../core/services/expert.service';

@Component({
  selector: 'app-experts-main',
  templateUrl: './experts-main.component.html',
  styleUrls: ['./experts-main.component.scss']
})
export class ExpertsMainComponent implements OnInit, OnDestroy {
  loading = false;
  labExperts: ILabExperts[] = [];
  destroy$ = new Subject();

  constructor(
    private expertService: ExpertService,
    private labService: LabService
  ) { }

  ngOnInit(): void {
    combineLatest([
      this.labService.getLabs(),
      this.expertService.getExperts()
    ])
    .pipe(
      tap(() => (this.loading = true)),
      takeUntil(this.destroy$)
    )
    .subscribe(([labs, experts]) => {
      this.labExperts = labs
        .filter(lab => experts.some(expert => expert?.labIds ? expert.labIds.split('|').includes(lab.id.toString()) : false))
        .map(lab => ({ ...lab, experts: experts.filter(expert => expert?.labIds ? expert.labIds.split('|').includes(lab.id.toString()) : false) }));

      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
