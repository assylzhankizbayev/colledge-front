import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss'],
})
export class MenuFormComponent {
  form: FormGroup;
  @Input() set formData(value: any) {
    this.form.patchValue(value, { emitEvent: false });
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
