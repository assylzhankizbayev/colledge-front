import { Component, forwardRef, HostListener, Inject, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENV } from '../../../app.token';
import { IFile, FileTypes } from '../../../core/models/files.model';
import { IEnvironment } from '../../../core/models/environments.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {
  @Input() progress?: any;
  @Input() title = 'Изображение';
  @Input() fileData: IFile | null = null;
  file: IFile | File | null = null;
  filesControl = new FormControl(null);
  onChange = (value: any) => { }
  imgHost = this.env.host;
  modified = false;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);

    if (file) {
      this.file = file as File;
      this.onChange(this.file);
    }
  }

  constructor(
    @Inject(ENV) private env: IEnvironment
  ) { }

  writeValue(value: IFile) {
    if (value) {
      this.fileData = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
  }

  isImage({ type }: IFile): boolean {
    return type.includes(FileTypes.IMG);
  }

  remove(): void {
    this.modified = true;
    this.file = null;
    this.fileData = null;
    this.onChange(null);
  }
}
