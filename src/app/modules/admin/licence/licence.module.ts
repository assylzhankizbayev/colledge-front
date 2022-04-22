import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenceRoutingModule } from './licence-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { LicenceFacade } from '../../../core/facade/licence.facade';
import { LicenceAdminComponent } from './licence.component';

@NgModule({
  declarations: [LicenceAdminComponent],
  imports: [
    CommonModule,
    LicenceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [LicenceFacade],
})
export class LicenceModule {}
