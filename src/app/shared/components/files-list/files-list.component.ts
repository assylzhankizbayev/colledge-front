import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
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
    this.filesService
      .getFiles()
      .pipe(
        tap((res) => {
          if (res.success) {
            this.images = res.result;
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
