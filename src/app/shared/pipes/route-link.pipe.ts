import { Pipe, PipeTransform } from '@angular/core';
import { IMenu } from '../../core/models/menu.model';

@Pipe({
  name: 'routeLink',
})
export class RouteLinkPipe implements PipeTransform {
  transform(menu: IMenu, ...args: any[]): string | null {
    let link: string | null = '';

    if (menu?.articleId) {
      link = `/page/article/${menu.articleId}`;
    } else if (menu?.route) {
      link = menu.route;
    } else {
      link = null;
    }

    return link;
  }
}
