import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsClientComponent } from './news.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { NewsService } from '../../../core/services/news.service';

const routes: Routes = [{ path: '', component: NewsClientComponent }];

@NgModule({
  declarations: [NewsClientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [NewsService]
})
export class NewsModule {}
