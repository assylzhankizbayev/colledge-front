import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleAdminComponent } from './article.component';

const routes: Routes = [
  { path: '', component: ArticleAdminComponent },
  { path: ':id/edit', component: ArticleEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
