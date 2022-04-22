import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AchievementsFacade } from '../../../core/facade/achievements.facade';

@Component({
  selector: 'app-admin-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsAdminComponent implements OnInit {
  post$ = this.achievementsFacade.post;
  form = this.fb.group({
    title: ['', Validators.required],
    body: [null, Validators.required],
    file: [null],
  });
  isFormToggled = false;

  constructor(
    private fb: FormBuilder,
    private achievementsFacade: AchievementsFacade
  ) {}

  ngOnInit(): void {
    this.achievementsFacade.init();
  }

  submit(): void {
    console.log(this.form.value);

    this.achievementsFacade
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
