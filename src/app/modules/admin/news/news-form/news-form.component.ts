import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
})
export class NewsFormComponent {
  @Input() set formData(value: any) {
    if (value) {
      this.form.patchValue(value, { emitEvent: false });
    }
  }
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: [null, Validators.required],
      file: [null],
    });
  }

  submitForm(): void {
    this.save.emit(this.form.value);
  }
}
