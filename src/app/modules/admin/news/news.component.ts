import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NewsFacade } from '../../../core/facade/news.facade';

@Component({
  selector: 'app-admin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsAdminComponent implements OnInit {
  news$ = this.newsFacade.news;
  newsForm = this.fb.group({
    title: ['', Validators.required],
    body: [null, Validators.required],
    file: [null],
  });
  toggleNewsForm = false;

  constructor(private fb: FormBuilder, private newsFacade: NewsFacade) {}

  ngOnInit(): void {
    this.newsFacade.init();
  }

  submit(): void {
    this.newsFacade
      .submit(this.newsForm.value)
      .pipe(
        tap(() => {
          this.toggleForm();
          this.newsForm.reset();
        }),
        catchError((err) => {
          console.log(err);
          return of(err);
        })
      )
      .subscribe();
  }

  toggleForm(): void {
    this.toggleNewsForm = !this.toggleNewsForm;
  }
}
