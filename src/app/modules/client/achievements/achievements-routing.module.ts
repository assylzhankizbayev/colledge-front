import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsClientComponent } from './achievements.component';

const routes: Routes = [{ path: '', component: AchievementsClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchievementsRoutingModule {}
