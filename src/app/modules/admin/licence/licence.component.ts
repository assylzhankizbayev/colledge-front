import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IBreadcumbRoute } from '../../../core/models/route.model';
import { LicenceFacade } from '../../../core/facade/licence.facade';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-admin-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.scss'],
})
export class LicenceAdminComponent implements OnInit {
  isFormToggled = false;
  licences$ = this.licenceFacade.licences;
  form = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
    file: [null],
  });
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Лицензии', route: '/admin/licence' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private licenceFacade: LicenceFacade,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.licenceFacade.init();
  }

  submit(): void {
    this.licenceFacade
      .submit(this.form.value)
      .pipe(
        tap(() => {
          this.toggleForm();
          this.form.patchValue({ title: '', body: '', file: null });
        }),
        catchError((err) => {
          return of(err);
        })
      )
      .subscribe();
  }

  toggleForm(): void {
    this.isFormToggled = !this.isFormToggled;
  }

  editLicence(id: number) {
    this.router.navigate(['/admin/licence', id, 'edit']);
  }

  removeLicence(id: number) {
    this.licenceFacade.delete(id).subscribe();
  }
}
