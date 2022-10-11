import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleContainerComponent } from './article-container.component';
import { SidebarMenuModule } from '../sidebar-menu/sidebar-menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticleContainerComponent],
  imports: [CommonModule, RouterModule, SidebarMenuModule],
  exports: [ArticleContainerComponent],
})
export class ArticleContainerModule {}
