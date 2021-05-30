import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.scss']
})
export class ConsultationFormComponent implements OnInit {

  form = new FormGroup({
    fio: new FormControl(),
    phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email])
  });

  constructor(
    public dialogRef: MatDialogRef<ConsultationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {hedTitle: string}
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(res => {
      this.isSubmit = false;
    });
  }

  isSend = false;
  isSubmit = false;
  submit() {
    this.isSubmit = true;
    console.log(this.form);
    if (!this.form.invalid) {
      setTimeout(() => {
        this.isSubmit = false;
        this.isSend = true;
      }, 1000);
    }
  }

  get phone() {
    return this.form.controls.phone;
  }

  get email() {
    return this.form.controls.email;
  }

  getPhoneErrorMessage() {
    if ((this.phone.hasError('required') && (this.phone.touched || this.isSubmit))) {
      return 'Пожалуйста введите номер телефона';
    }
    if (this.phone.hasError('minlength') && this.isSubmit) {
      return 'Пожалуйста введите номер телефона правильно'
    }
    return;
  }

  getEmailErrorMessage() {
    if ((this.email.hasError('required') && (this.email.touched || this.isSubmit))) {
      return 'Пожалуйста введите почтовый адрес';
    }
    if (this.email.hasError('email') && this.isSubmit) {
      return 'Пожалуйста введите почтовый адрес правильно'
    }
    return;
  }

}
