import { Component, Inject, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ENV } from 'src/app/app.token';
import { IEnvironment } from 'src/app/core/models/environments.model';
import { GalleryFile } from 'src/app/core/models/gallery.model';
import { Thumbs } from 'src/app/core/models/licence.model';
import { GalleryService } from 'src/app/core/services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {
  host = this.env.host;
  galleries: GalleryFile[] = [];

  constructor(
    private galleryService: GalleryService,
    @Inject(ENV) private env: IEnvironment
  ) { }

  ngOnInit(): void {
    this.galleryService.getGalleryList()
      .pipe(
        tap(res => {
          if (res?.success && res?.result) {
            this.galleries = res.result;
          }
        })
      )
      .subscribe();
  }

  getThumbsParams(gallery: GalleryFile) {
    return {
      ...gallery,
      src: this.host + gallery.file.path,
    } as Thumbs;
  }
}
