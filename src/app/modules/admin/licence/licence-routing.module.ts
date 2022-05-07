import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenceEditComponent } from './licence-edit/licence-edit.component';
import { LicenceAdminComponent } from './licence.component';

const routes: Routes = [
  { path: '', component: LicenceAdminComponent },
  { path: ':id/edit', component: LicenceEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenceRoutingModule {}
