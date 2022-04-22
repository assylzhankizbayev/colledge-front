import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenceClientComponent } from './licence.component';

const routes: Routes = [{ path: '', component: LicenceClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenceRoutingModule {}
