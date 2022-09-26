import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsAdminComponent } from './news.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

const routes: Routes = [
  { path: '', component: NewsAdminComponent },
  { path: ':id/edit', component: NewsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
