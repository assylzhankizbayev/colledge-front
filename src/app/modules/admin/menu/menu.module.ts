import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuRoutingModule } from './menu-routing.module';

import { MenuComponent } from './menu.component';
import { SharedModule } from '../../../shared/shared.module';
import { MenuFacade } from '../../../core/facade/menu.facade';
import { ArticleFacade } from '../../../core/facade/article.facade';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';
import { MenuItemModalComponent } from './menu-item-modal/menu-item-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuItemsListComponent,
    MenuItemModalComponent,
    MenuFormComponent,
    MenuEditComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
  ],
  providers: [MenuFacade, ArticleFacade],
})
export class MenuModule {}
