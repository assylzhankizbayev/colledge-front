import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

import { CategoryFacade } from '../../../core/facade/category.facade';
import { CategoryComponent } from './category.component';
import { CategoryItemModalComponent } from './category-item-modal/category-item-modal.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryItemsListComponent } from './category-items-list/category-items-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const components = [
  CategoryDetailsComponent,
  CategoryEditComponent,
  CategoryFormComponent,
  CategoryComponent,
  CategoryItemsListComponent,
];
const modals = [CategoryItemModalComponent];

@NgModule({
  declarations: [...components, ...modals],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule,
  ],
  providers: [CategoryFacade],
  entryComponents: [...modals],
})
export class CategoryModule {}
