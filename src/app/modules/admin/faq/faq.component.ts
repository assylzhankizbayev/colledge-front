import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap, take, switchMap } from 'rxjs/operators';
import { IFaq } from '../../../core/models/faq.model';
import { FaqService } from '../../../core/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit, OnDestroy {
  isFormToggled = false;
  mainCategory = 10;
  list: IFaq[] = [];
  displayedColumns: string[] = ['question', 'answer', 'controls'];
  destroy$ = new Subject();

  constructor(private router: Router, private faqService: FaqService) {}

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
