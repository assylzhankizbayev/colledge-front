import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ArticleRoutingModule } from './article-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { ArticleFacade } from '../../../core/facade/article.facade';
import { CategoryFacade } from '../../../core/facade/category.facade';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleAdminComponent } from './article.component';

@NgModule({
  declarations: [ArticleAdminComponent, ArticleFormComponent, ArticleEditComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule
  ],
  providers: [
    ArticleFacade,
    CategoryFacade
  ],
})
export class ArticleModule {}
