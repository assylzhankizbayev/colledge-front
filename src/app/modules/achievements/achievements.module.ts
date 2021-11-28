import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchievementsRoutingModule } from './achievements-routing.module';
import { AchievementsComponent } from './achievements.component';
import { SharedModule } from '../../shared/shared.module';
import { AchievementsService } from '../../core/services/achievements.service';
import { AchievementsFacade } from '../../core/facade/achievements.facade';


@NgModule({
  declarations: [
    AchievementsComponent
  ],
  imports: [
    CommonModule,
    AchievementsRoutingModule,
    SharedModule
  ],
  providers: [
    AchievementsService,
    AchievementsFacade
  ]
})
export class AchievementsModule { }
