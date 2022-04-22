import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAdminComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
