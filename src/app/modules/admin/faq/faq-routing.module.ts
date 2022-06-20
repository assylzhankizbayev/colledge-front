import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqEditComponent } from './faq-edit/faq-edit.component';
import { FaqComponent } from './faq.component';

const routes: Routes = [
  { path: '', component: FaqComponent },
  { path: ':id/edit', component: FaqEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqRoutingModule {}
