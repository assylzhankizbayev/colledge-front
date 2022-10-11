import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutClientComponent } from './about.component';
import { AboutFacade } from '../../../core/facade/about.facade';
import { AboutService } from '../../../core/services/about.service';
import { SharedModule } from '../../../shared/shared.module';
import { SidebarMenuModule } from '../../../shared/components/sidebar-menu/sidebar-menu.module';

@NgModule({
  declarations: [AboutClientComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule, SidebarMenuModule],
  providers: [AboutService, AboutFacade],
})
export class AboutModule {}
