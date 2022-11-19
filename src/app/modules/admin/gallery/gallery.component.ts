import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, mergeMap, take, tap } from 'rxjs/operators';
import { IBreadcumbRoute } from '../../../core/models/route.model';
import { GalleryFile } from '../../../core/models/gallery.model';
import { GalleryService } from '../../../core/services/gallery.service';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';
import { ENV } from 'src/app/app.token';
import { IEnvironment } from 'src/app/core/models/environments.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  host = this.env.host;
  mainCategory = 10;
  isFormToggled = false;
  galleryList: GalleryFile[] = [];
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Галерея', route: '/admin/gallery' },
  ];

  constructor(
    private router: Router,
    private galleryService: GalleryService,
    private breadcrumbsService: BreadcrumbsService,
    @Inject(ENV) private env: IEnvironment
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.getGalleryList().subscribe();
  }

  private getGalleryList() {
    return this.galleryService.getGalleryList()
      .pipe(
        tap((res) => {
          this.galleryList = res.success && res.result ? res.result : [];
        })
      );
  }

  add(data: any): void {
    this.galleryService.addGallery(data)
      .pipe(
        mergeMap(() => this.getGalleryList()),
        tap(() => this.toggleForm()),
        catchError((err) => {
          return of(err);
        }),
        take(1)
      )
      .subscribe();
  }

  edit(id: number): void {
    this.router.navigate(['/admin/gallery', id, 'edit']);
  }

  remove(id: number) {
    this.galleryService.deleteGallery(id)
      .pipe(
        mergeMap(() => this.getGalleryList()),
        catchError((err) => {
          return of(err);
        }),
        take(1)
      )
      .subscribe();
  }

  toggleForm(): void {
    this.isFormToggled = !this.isFormToggled;
  }

}
