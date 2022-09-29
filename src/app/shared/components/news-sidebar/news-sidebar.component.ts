import { Component, OnInit } from '@angular/core';
import { IMenu, IMenuItem } from '../../../core/models/menu.model';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-news-sidebar',
  templateUrl: './news-sidebar.component.html',
  styleUrls: ['./news-sidebar.component.scss']
})
export class NewsSidebarComponent implements OnInit {
  links: IMenu[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuItemsById(2).subscribe((res) => {
      if (res.success) {
        this.links = (res.result as IMenuItem[]).map((item) => ({
          title: item.title,
          route: item.route || '',
          articleId: item.article_id,
        }));
      }
    });
  }

}
