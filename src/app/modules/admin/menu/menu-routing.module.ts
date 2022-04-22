import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: ':menuId/edit',
    component: MenuEditComponent,
  },
  {
    path: ':menuId/items',
    component: MenuItemsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
