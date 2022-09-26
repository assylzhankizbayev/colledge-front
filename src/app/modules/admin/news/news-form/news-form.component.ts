import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../../../core/services/news.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
})
export class NewsFormComponent implements OnInit {
  @Input() set formData(value: any) {
    if (value) {
      this.form.patchValue(value, { emitEvent: false });
    }
  }
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder, private newsService: NewsService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: [null, Validators.required],
      file: [null],
    });
  }

  ngOnInit(): void {}
}
