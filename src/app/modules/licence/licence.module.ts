import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenceRoutingModule } from './licence-routing.module';
import { LicenceComponent } from './licence.component';
import { LicenceService } from '../../core/services/licence.service';
import { LicenceFacade } from '../../core/facade/licence.facade';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LicenceComponent
  ],
  imports: [
    CommonModule,
    LicenceRoutingModule,
    SharedModule
  ],
  providers: [
    LicenceService,
    LicenceFacade
  ]
})
export class LicenceModule { }
