import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { SidebarMenuModule } from '../../../shared/components/sidebar-menu/sidebar-menu.module';
import { GalleryComponent } from './gallery.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryService } from '../../../core/services/gallery.service';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [GalleryComponent, GalleryListComponent],
  imports: [CommonModule, GalleryRoutingModule, SidebarMenuModule, SharedModule],
  providers: [GalleryService]
})
export class GalleryModule { }
