import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { IFile } from '../../../core/models/files.model';
import { FilesService } from '../../../core/services/files.service';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
})
export class FilesListComponent implements OnInit, OnDestroy {
  images: IFile[] = [];
  destroy$ = new Subject();

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {
    this._getFiles().pipe(takeUntil(this.destroy$), take(1)).subscribe();
  }

  private _getFiles() {
    return this.filesService.getFiles().pipe(
      tap((res) => {
        if (res.success) {
          this.images = res.result;
        }
      })
    );
  }

  uploadFile() {
    const input = document.createElement('input') as HTMLInputElement;
    input.setAttribute('type', 'file');

    input.onchange = () => {
      const files = input.files;
      const file = files?.length ? files[0] : null;

      this.filesService
        .upload({ file })
        .pipe(
          mergeMap(() => this._getFiles()),
          takeUntil(this.destroy$),
          take(1)
        )
        .subscribe();
    };

    input.click();
  }

  deleteFile(id: number) {
    this.filesService
      .delete(id)
      .pipe(
        mergeMap(() => this._getFiles()),
        takeUntil(this.destroy$),
        take(1)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
