import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, takeUntil, take, tap, map } from 'rxjs/operators';
import { IFaq } from '../../../../core/models/faq.model';
import { IBreadcumbRoute } from '../../../../core/models/route.model';
import { FaqService } from '../../../../core/services/faq.service';
import { BreadcrumbsService } from '../../../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-faq-edit',
  templateUrl: './faq-edit.component.html',
  styleUrls: ['./faq-edit.component.scss'],
})
export class FaqEditComponent implements OnInit, OnDestroy {
  faq: IFaq | null = null;
  faq$: Observable<IFaq | null>;
  faqId: number | null = null;
  private destroy$ = new Subject();
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Часто задаваемые вопросы', route: '/admin/faq' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private faqService: FaqService,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.faq$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        this.faqId = id ? +id : null;
        return id ? this.faqService.getFaqById(+id) : of(null);
      }),
      map((res) => res?.result || null),
      tap((res) => {
        if (res) {
          this.breadcrumbsService.addRoute({
            title: 'Редактирование',
            route: null,
          } as IBreadcumbRoute);
        }
      })
    );
  }

  update(data: IFaq): void {
    if (this.faqId) {
      this.faqService
        .updateFaq(this.faqId, data)
        .pipe(
          tap(() => this.cancel()),
          takeUntil(this.destroy$),
          take(1)
        )
        .subscribe();
    }
  }

  cancel(): void {
    this.router.navigate(['/admin/faq']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
