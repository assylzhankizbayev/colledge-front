import { Component, Input } from '@angular/core';
import { IMenu } from '../../../core/models/menu.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {
  @Input() links: IMenu[] = [];
}
