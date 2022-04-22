import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsAdminComponent } from './achievements.component';

const routes: Routes = [{ path: '', component: AchievementsAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchievementsRoutingModule {}
