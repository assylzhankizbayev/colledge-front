import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryItemsListComponent } from './category-items-list/category-items-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
  {
    path: ':categoryId/items',
    component: CategoryItemsListComponent,
  },
  {
    path: ':categoryId/edit',
    component: CategoryEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
