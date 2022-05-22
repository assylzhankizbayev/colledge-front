import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.email],
    phone: [null, Validators.required],
    question: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormComponent>
  ) {}

  ngOnInit(): void {}

  send(): void {
    this.dialogRef.close(this.form.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
