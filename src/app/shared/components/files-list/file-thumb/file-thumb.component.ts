import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ENV } from '../../../../app.token';
import { IEnvironment } from '../../../../core/models/environments.model';
import { IFile } from '../../../../core/models/files.model';

@Component({
  selector: 'app-file-thumb',
  templateUrl: './file-thumb.component.html',
  styleUrls: ['./file-thumb.component.scss'],
})
export class FileThumbComponent {
  @Input() image: IFile | null = null;
  @Output() deleteFile = new EventEmitter<number>();
  host = this.env.host;
  copied = false;

  constructor(@Inject(ENV) private env: IEnvironment) {}

  copyLink(path: string): void {
    this.copied = true;
    navigator.clipboard.writeText(this.host + path);

    setTimeout(() => (this.copied = false), 1000);
  }
}
