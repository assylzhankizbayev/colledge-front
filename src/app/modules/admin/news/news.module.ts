import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../../../shared/shared.module';

import { NewsAdminComponent } from './news.component';
import { NewsFacade } from '../../../core/facade/news.facade';

@NgModule({
  declarations: [NewsAdminComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [NewsFacade],
})
export class NewsModule {}
