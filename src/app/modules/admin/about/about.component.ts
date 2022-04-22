import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AboutFacade } from '../../../core/facade/about.facade';

@Component({
  selector: 'app-admin-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutAdminComponent implements OnInit {
  post$ = this.aboutFacade.post;
  form = this.fb.group({
    title: ['', Validators.required],
    body: [null, Validators.required],
    file: [null],
  });
  isFormToggled = false;

  constructor(private fb: FormBuilder, private aboutFacade: AboutFacade) {}

  ngOnInit(): void {
    this.aboutFacade.init();
  }

  submit(): void {
    console.log(this.form.value);

    this.aboutFacade
      .submit(this.form.value)
      .pipe(
        tap(() => {
          this.toggleForm();
          this.form.reset();
        }),
        catchError((err) => {
          console.log(err);

          return of(err);
        })
      )
      .subscribe();
  }

  toggleForm(): void {
    this.isFormToggled = !this.isFormToggled;
  }
}
