import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFaq } from '../../../../core/models/faq.model';

@Component({
  selector: 'app-faq-form',
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.scss'],
})
export class FaqFormComponent {
  form: FormGroup;
  @Input() set formData(value: IFaq) {
    if (value) {
      this.form.patchValue(value, { emitEvent: false });
    }
  }
  @Output() save = new EventEmitter<IFaq>();
  @Output() cancel = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
    });
  }

  onSubmit() {
    this.save.emit(this.form.value);
  }
}
