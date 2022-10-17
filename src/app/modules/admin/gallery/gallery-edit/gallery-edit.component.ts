import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { catchError, mergeMap, take, takeUntil, tap } from 'rxjs/operators';
import { IFile } from '../../../../core/models/files.model';
import { IGallery } from '../../../../core/models/gallery.model';
import { IBreadcumbRoute } from '../../../../core/models/route.model';
import { BreadcrumbsService } from '../../../../core/services/breadcrumbs.service';
import { GalleryService } from '../../../../core/services/gallery.service';

@Component({
  selector: 'app-gallery-edit',
  templateUrl: './gallery-edit.component.html',
  styleUrls: ['./gallery-edit.component.scss']
})
export class GalleryEditComponent implements OnInit, OnDestroy {
  mainCategory = 10;
  articleId: number | null = null;
  routeList: IBreadcumbRoute[] = [
    { title: 'Главная', route: '/admin' },
    { title: 'Материалы', route: '/admin/article' },
  ];
  private destroy$ = new Subject();
  gallery: IGallery<IFile> | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private galleryService: GalleryService,
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.init(this.routeList);
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        mergeMap((params: ParamMap) => {
          const id = params.get('id');
          this.articleId = id ? +id : null;

          return id ? this.galleryService.getGalleryById(+id) : of(null);
        }),
        tap((res) => {
          if (res?.success && res?.result) {
            this.gallery = res.result;

            const route: IBreadcumbRoute = {
              title: res.result?.title as string,
              route: null,
            };

            this.breadcrumbsService.addRoute(route);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  update(data: any): void {
    if (this.articleId) {
      this.galleryService
        .updateGallery(data)
        .pipe(
          tap(() => {
            this.router.navigate(['/admin/gallery']);
          }),
          catchError((err) => {
            console.log(err);

            return of(err);
          }),
          takeUntil(this.destroy$),
          take(1)
        )
        .subscribe();
    }
  }

  cancel(): void {
    this.router.navigate(['/admin/article']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
