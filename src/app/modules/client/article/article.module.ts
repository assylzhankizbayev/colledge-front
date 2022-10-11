import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { ArticlePostComponent } from './article-post/article-post.component';
import { SharedModule } from '../../../shared/shared.module';
import { SidebarMenuModule } from '../../../shared/components/sidebar-menu/sidebar-menu.module';

@NgModule({
  declarations: [ArticleComponent, ArticlePostComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    SharedModule,
    SidebarMenuModule,
  ],
})
export class ArticleModule {}
