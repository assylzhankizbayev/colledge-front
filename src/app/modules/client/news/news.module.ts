import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsClientComponent } from './news.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

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
})
export class NewsModule {}
