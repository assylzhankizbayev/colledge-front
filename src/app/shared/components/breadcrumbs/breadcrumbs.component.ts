import { Component } from '@angular/core';
import { BreadcrumbsService } from 'src/app/core/services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  breadcrumbs$ = this.breadcrumbsService.breadcrumbs$;

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  deleteLinkFromBreadcrumbs(i: number) {
    this.breadcrumbsService.removeRouteFromIndex(i);
  }
}
