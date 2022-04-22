import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LicenceFacade } from '../../../core/facade/licence.facade';

@Component({
  selector: 'app-admin-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.scss'],
})
export class LicenceAdminComponent implements OnInit {
  post$ = this.LicenceFacade.post;
  form = this.fb.group({
    title: ['', Validators.required],
    body: [null, Validators.required],
    file: [null],
  });
  isFormToggled = false;

  constructor(private fb: FormBuilder, private LicenceFacade: LicenceFacade) {}

  ngOnInit(): void {
    this.LicenceFacade.init();
  }

  submit(): void {
    console.log(this.form.value);

    this.LicenceFacade.submit(this.form.value)
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
