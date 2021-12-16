import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchievementsRoutingModule } from './achievements-routing.module';
import { AchievementsComponent } from './achievements.component';
import { SharedModule } from '../../shared/shared.module';
import { AchievementsService } from '../../core/services/achievements.service';
import { AchievementsFacade } from '../../core/facade/achievements.facade';
import { AchevementsPicsComponent } from './achevements-pics/achevements-pics.component';


@NgModule({
  declarations: [
    AchievementsComponent,
    AchevementsPicsComponent
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
