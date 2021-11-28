import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenceComponent } from './licence.component';

const routes: Routes = [{ path: '', component: LicenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenceRoutingModule {}
