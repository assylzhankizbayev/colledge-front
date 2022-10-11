import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { ArticleContainerModule } from '../../shared/components/article-container/article-container.module';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ArticleContainerModule
  ],
})
export class ClientModule {}
