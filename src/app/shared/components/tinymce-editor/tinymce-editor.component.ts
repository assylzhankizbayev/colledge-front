import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tinymce-editor',
  templateUrl: './tinymce-editor.component.html',
  styleUrls: ['./tinymce-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TinymceEditorComponent),
      multi: true,
    },
  ],
})
export class TinymceEditorComponent implements OnInit, OnDestroy {
  @Input() height = 400;
  @Input() title = 'Содержимое';
  @ViewChild('upload', { static: true }) upload?: ElementRef;
  textControl = new FormControl('');
  destroy$ = new Subject();
  editor: any;

  onChange = (value: any) => {};
  onTouch = () => {};

  constructor() {}

  ngOnInit(): void {
    this.textControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        this.onChange(val);
      });
  }

  imagesUploadHandler = (blobInfo: any, success: any, failure: any) => {};

  writeValue(value: any) {
    this.textControl.setValue(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  helloPrint() {
    console.log('hello');
  }

  onInit(args: any) {
    if (args?.editor) {
      this.editor = args.editor;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
