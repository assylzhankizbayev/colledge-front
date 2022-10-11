import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchievementsRoutingModule } from './achievements-routing.module';
import { AchievementsClientComponent } from './achievements.component';
import { AchevementsPicsComponent } from './achevements-pics/achevements-pics.component';
import { AchievementsFacade } from '../../../core/facade/achievements.facade';
import { SharedModule } from '../../../shared/shared.module';
import { SidebarMenuModule } from '../../../shared/components/sidebar-menu/sidebar-menu.module';

@NgModule({
  declarations: [AchievementsClientComponent, AchevementsPicsComponent],
  imports: [
    CommonModule,
    AchievementsRoutingModule,
    SharedModule,
    SidebarMenuModule,
  ],
  providers: [AchievementsFacade],
})
export class AchievementsModule {}
