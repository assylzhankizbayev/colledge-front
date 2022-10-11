import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenceRoutingModule } from './licence-routing.module';
import { LicenceClientComponent } from './licence.component';
import { LicenceService } from '../../../core/services/licence.service';
import { LicenceFacade } from '../../../core/facade/licence.facade';
import { SharedModule } from '../../../shared/shared.module';
import { SidebarMenuModule } from '../../../shared/components/sidebar-menu/sidebar-menu.module';

@NgModule({
  declarations: [LicenceClientComponent],
  imports: [
    CommonModule,
    LicenceRoutingModule,
    SharedModule,
    SidebarMenuModule,
  ],
  providers: [LicenceService, LicenceFacade],
})
export class LicenceModule {}
