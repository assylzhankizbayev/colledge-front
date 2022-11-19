import { Component, ElementRef, forwardRef, HostListener, Inject, Input } from '@angular/core';
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
  private file: File | null = null;
  filesControl = new FormControl(null);
  onChange = (value: any) => { }
  imgHost = this.env.host;
  modified = false;

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    this.file = event && event.item(0);
    this.onChange(this.file);
  }

  constructor(
    private host: ElementRef<HTMLInputElement>,
    @Inject(ENV) private env: IEnvironment
  ) { }

  writeValue(value: any) {
    this.host.nativeElement.value = value;
    this.file = null;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
  }

  isImage({ type }: IFile) {
    return type.includes(FileTypes.IMG);
  }

  remove(): void {
    this.modified = true;
    this.fileData = null;
    this.onChange(null);
  }
}
