import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchievementsRoutingModule } from './achievements-routing.module';
import { AchievementsClientComponent } from './achievements.component';
import { SharedModule } from '../../../shared/shared.module';
import { AchievementsFacade } from '../../../core/facade/achievements.facade';
import { AchevementsPicsComponent } from './achevements-pics/achevements-pics.component';

@NgModule({
  declarations: [AchievementsClientComponent, AchevementsPicsComponent],
  imports: [CommonModule, AchievementsRoutingModule, SharedModule],
  providers: [AchievementsFacade],
})
export class AchievementsModule {}
