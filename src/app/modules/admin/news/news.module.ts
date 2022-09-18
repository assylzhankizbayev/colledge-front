import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { NewsAdminComponent } from './news.component';
import { NewsFacade } from '../../../core/facade/news.facade';
import { NewsService } from '../../../core/services/news.service';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsFormComponent } from './news-form/news-form.component';

@NgModule({
  declarations: [NewsAdminComponent, NewsEditComponent, NewsFormComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [NewsFacade, NewsService],
})
export class NewsModule {}
