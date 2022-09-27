import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsClientComponent } from './news.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { NewsService } from '../../../core/services/news.service';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewsClientComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: NewsListComponent },
      { path: ':id', component: NewsDetailsComponent },
    ],
  },
];

@NgModule({
  declarations: [NewsClientComponent, NewsDetailsComponent, NewsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [NewsService],
})
export class NewsModule {}
