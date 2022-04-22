import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsAdminComponent } from './news.component';

const routes: Routes = [{ path: '', component: NewsAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
