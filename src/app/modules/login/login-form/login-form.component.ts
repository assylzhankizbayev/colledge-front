import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import * as bcrypt from 'bcryptjs';
import { Route } from '../../../core/models/route.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements AfterViewInit, OnDestroy {
  @ViewChild('phoneNumber') phoneNumberEl: ElementRef;
  form: FormGroup;
  destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    this.phoneNumberEl.nativeElement.focus();
  }

  async login() {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.form.value.password, salt);

    this.authService
      .login({ ...this.form.value, password: passwordHash })
      .pipe(
        tap((res) => {
          if (res.accessToken) {
            this.router.navigate([Route.Admin]);
            this.form.reset();
          }
        }),
        takeUntil(this.destroy$),
        take(1)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
