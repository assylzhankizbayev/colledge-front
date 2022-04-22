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

// https://www.tiny.cloud/docs/integrations/angular/
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

  filePickerCb(callback?: any, value?: any, meta?: any) {
    if (meta?.filetype === 'image') {
      this.helloPrint();
      // var input = document.createElement('input');
      // input.setAttribute('type', 'file');
      // input.setAttribute('accept', 'image/*');

      // /*
      //   Note: In modern browsers input[type="file"] is functional without
      //   even adding it to the DOM, but that might not be the case in some older
      //   or quirky browsers like IE, so you might want to add it to the DOM
      //   just in case, and visually hide it. And do not forget do remove it
      //   once you do not need it anymore.
      // */

      // input.onchange = function (e) {
      //   console.log('input change', e, e.target);

      //   // var file = this.files[0];

      //   var reader = new FileReader();
      //   // reader.onload = function () {
      //   //   /*
      //   //     Note: Now we need to register the blob in TinyMCEs image blob
      //   //     registry. In the next release this part hopefully won't be
      //   //     necessary, as we are looking to handle it internally.
      //   //   */
      //   //   var id = 'blobid' + (new Date()).getTime();
      //   //   var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
      //   //   var base64 = reader.result.split(',')[1];
      //   //   var blobInfo = blobCache.create(id, file, base64);
      //   //   blobCache.add(blobInfo);

      //   //   /* call the callback and populate the Title field with the file name */
      //   //   cb(blobInfo.blobUri(), { title: file.name });
      //   // };
      //   // reader.readAsDataURL(file);
      // };

      // input.click();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
