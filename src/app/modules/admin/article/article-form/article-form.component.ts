import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CategoryFacade } from '../../../../core/facade/category.facade';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent {
  form: FormGroup;
  @Input() set formData(value: any) {
    if (value) {
      this.form.patchValue(value, { emitEvent: false });
    }
  }
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter();
  categoryItems$ = this.categoryFacade.categoryItems.pipe(
    map((res) =>
      res.map((item) => ({
        id: item.id,
        title: item.title,
      }))
    )
  );

  constructor(private fb: FormBuilder, private categoryFacade: CategoryFacade) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      file: [null],
      categoryItemId: [''],
    });
  }

  onSubmit() {
    this.save.emit(this.form.value);
  }
}
