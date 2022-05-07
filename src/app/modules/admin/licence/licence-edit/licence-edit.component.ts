import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { LicenceFacade } from '../../../../core/facade/licence.facade';

@Component({
  selector: 'app-licence-edit',
  templateUrl: './licence-edit.component.html',
  styleUrls: ['./licence-edit.component.scss'],
})
export class LicenceEditComponent implements OnInit, OnDestroy {
  form = this.fb.group({
    id: [null],
    title: ['', Validators.required],
    body: [null, Validators.required],
    file: [null],
  });
  destroy$ = new Subject();
  licenceId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private licenceFacade: LicenceFacade
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const id = params.get('id');
          return id
            ? this.licenceFacade.getLicence(+id).pipe(
                tap((res) =>
                  this.form.patchValue({
                    id: res.result?.id,
                    title: res.result?.title,
                    body: res.result?.body,
                  })
                )
              )
            : of(null);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  update() {
    this.licenceFacade.update(this.form.value).subscribe();
  }

  cancel() {
    this.router.navigate(['/admin/licence']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
