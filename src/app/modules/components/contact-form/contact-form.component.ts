import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() title = 'Затрудняетесь с выбором исследования?';


  contact = new FormControl(null, [Validators.required, Validators.minLength(10)]);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  isSubmit = false;
  sendContact() {
    this.isSubmit = true;
    if (!this.contact.invalid) {
      this.dialog.open(ConfirmDialogComponent, {
        panelClass: 'custom-dialog-container'
      }).afterClosed().subscribe(_ => {
        this.isSubmit = false;
        this.contact.reset();
      });
    }
  }

  getErrorMessage() {
    if ((this.contact.hasError('required') && (this.contact.touched || this.isSubmit))) {
      return 'Пожалуйста введите номер телефона';
    }
    if (this.contact.hasError('minlength') && this.isSubmit) {
      return 'Пожалуйста введите номер телефона правильно'
    }
    return;
  }

}
