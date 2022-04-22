import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenceAdminComponent } from './licence.component';

const routes: Routes = [{ path: '', component: LicenceAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenceRoutingModule {}
