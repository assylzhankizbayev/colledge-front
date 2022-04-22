import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent {
  form: FormGroup;
  @Input() set formData(value: any) {
    if (value) {
      this.form.patchValue(value, { emitEvent: false });
    }
  }
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [null],
    });
  }

  onSave() {
    this.save.emit(this.form.value);
  }
}
