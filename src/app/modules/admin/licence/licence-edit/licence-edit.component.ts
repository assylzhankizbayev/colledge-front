import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { IBreadcumbRoute } from 'src/app/core/models/route.model';
import { BreadcrumbsService } from 'src/app/core/services/breadcrumbs.service';
import { LicenceFacade } from '../../../../core/facade/licence.facade';

@Component({
  selector: 'app-licence-edit',
  templateUrl: './licence-edit.component.html',
  styleUrls: ['./licence-edit.component.scss'],
})
export class LicenceEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  licenceId: number | null = null;
  form = this.fb.group({
    id: [null],
    title: ['', Validators.required],
    body: [null, Validators.required],
    file: [null],
  });
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Лицензии', route: '/admin/licence' },
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private licenceFacade: LicenceFacade,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

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
        tap((res) => {
          if (res?.success) {
            const route: IBreadcumbRoute = {
              title: res.result?.title || '',
              route: null,
            };
            this.breadcrumbsService.addRoute(route);
          }
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
