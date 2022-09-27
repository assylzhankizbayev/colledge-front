import {
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { of, Subject } from 'rxjs';
import { catchError, take, takeUntil, tap } from 'rxjs/operators';
import { ENV } from '../../../app.token';
import { IEnvironment } from '../../../core/models/environments.model';
import { FilesService } from '../../../core/services/files.service';

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
  host = this.env.host;
  textControl = new FormControl('');
  destroy$ = new Subject();
  editor: any;

  onChange = (value: any) => {};
  onTouch = () => {};

  constructor(
    private filesService: FilesService,
    @Inject(ENV) private env: IEnvironment
  ) {}

  ngOnInit(): void {
    this.textControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        this.onChange(val);
      });
  }

  imagesUploadHandler = (blobInfo: any, success: any, failure: any) => {

    const file = blobInfo.blob();
    const fileBase64 = blobInfo.base64();
    const fileName = blobInfo.filename();
    const name = blobInfo.name();
    console.log(blobInfo, fileName, name, fileBase64);
    const mediaType = `data:image/${fileName.includes('png') ? 'png' : 'jpeg'};base64,`
    success(mediaType + fileBase64);

    // if (file) {
    //   this.filesService
    //     .upload({ file })
    //     .pipe(
    //       tap((res) => {
    //         if (res.success) {
    //           success(this.host + res.result.path);
    //         } else {
    //           failure(JSON.stringify('Upload Error'));
    //         }
    //       }),
    //       catchError((err) => {
    //         failure(JSON.stringify(err));
    //         return of(err);
    //       }),
    //       takeUntil(this.destroy$),
    //       take(1)
    //     )
    //     .subscribe();
    // }
  };

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
