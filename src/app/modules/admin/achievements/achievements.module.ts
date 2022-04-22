import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AchievementsRoutingModule } from './achievements-routing.module';
import { AchievementsAdminComponent } from './achievements.component';
import { SharedModule } from '../../../shared/shared.module';
import { AchievementsFacade } from '../../../core/facade/achievements.facade';

@NgModule({
  declarations: [AchievementsAdminComponent],
  imports: [
    CommonModule,
    AchievementsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [AchievementsFacade],
})
export class AchievementsModule {}
