import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IBreadcumbRoute } from '../models/route.model';

@Injectable({ providedIn: 'root' })
export class BreadcrumbsService {
  private _breadcrumbs$ = new BehaviorSubject<IBreadcumbRoute[]>([]);

  get breadcrumbs$() {
    return this._breadcrumbs$.asObservable();
  }

  init(list: IBreadcumbRoute[]): void {
    this._breadcrumbs$.next(list);
  }

  addRoute(route: IBreadcumbRoute): void {
    const list = [...this._breadcrumbs$.value, route];
    this._breadcrumbs$.next(list);
  }

  removeRouteFromIndex(i: number): void {
    const list = [...this._breadcrumbs$.value].slice(0, i + 1);
    this._breadcrumbs$.next(list);
  }
}
