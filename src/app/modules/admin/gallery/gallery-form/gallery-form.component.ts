import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gallery-form',
  templateUrl: './gallery-form.component.html',
  styleUrls: ['./gallery-form.component.scss']
})
export class GalleryFormComponent {
  form: FormGroup;

  @Input()
  set formData(value: any) {
    if (value) {
      this.form.patchValue(value, { emitEvent: false });
    }
  }
  _file: any;

  @Input()
  set fileData(value: any) {
    this._file = value;
    console.log('file', value);
  }
  get fileData() {
    return this._file;
  }

  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null],
      title: [null, Validators.required],
      file: [null, Validators.required]
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }

  cancelForm(): void {
    this.cancel.emit();
  }
}
