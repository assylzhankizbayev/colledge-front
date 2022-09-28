import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap, take, switchMap } from 'rxjs/operators';
import { IFaq } from '../../../core/models/faq.model';
import { IBreadcumbRoute } from '../../../core/models/route.model';
import { FaqService } from '../../../core/services/faq.service';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit, OnDestroy {
  mainCategory = 10;
  isFormToggled = false;
  destroy$ = new Subject();
  list: IFaq[] = [];
  displayedColumns: string[] = ['question', 'answer', 'controls'];
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Часто задаваемые вопросы', route: '/admin/faq' },
  ];

  constructor(
    private router: Router,
    private faqService: FaqService,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.getFaqList().pipe(takeUntil(this.destroy$), take(1)).subscribe();
  }

  getFaqList() {
    return this.faqService.getFaqList().pipe(
      tap((res) => {
        if (res?.success) {
          this.list = res.result;
        }
      })
    );
  }

  addArticle(data: IFaq): void {
    this.faqService
      .addFaq(data)
      .pipe(
        switchMap(() => this.getFaqList().pipe(tap(() => this.toggleForm()))),
        takeUntil(this.destroy$),
        take(1)
      )
      .subscribe();
  }

  edit(id: number): void {
    this.router.navigate(['/admin/faq', id, 'edit']);
  }

  remove(id: number) {
    this.faqService
      .deleteFaq(id)
      .pipe(
        switchMap(() => this.getFaqList()),
        takeUntil(this.destroy$),
        take(1)
      )
      .subscribe();
  }

  toggleForm(): void {
    this.isFormToggled = !this.isFormToggled;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
