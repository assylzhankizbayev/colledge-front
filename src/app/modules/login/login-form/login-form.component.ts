import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements AfterViewInit, OnDestroy {
  @ViewChild('phoneNumber') phoneNumberEl: ElementRef;
  form = this.fb.group({
    phone: ['', Validators.required],
    password: ['', Validators.required],
  });
  destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngAfterViewInit(): void {
    this.phoneNumberEl.nativeElement.focus();
  }

  login(): void {
    this.authService
      .login(this.form.value)
      .pipe(
        tap((res) => {
          if (res.accessToken) {
            this.form.reset();
            this.router.navigate(['/admin']);
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
