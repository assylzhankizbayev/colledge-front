import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-category-item-modal',
  templateUrl: './category-item-modal.component.html',
  styleUrls: ['./category-item-modal.component.scss'],
})
export class CategoryItemModalComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CategoryItemModalComponent>
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      parentCategoryItemId: [null],
      orderIdx: [null],
    });

    if (data?.categoryItem) {
      this.form.patchValue(data.categoryItem, { emitEvent: false });
    }
  }

  submit() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
