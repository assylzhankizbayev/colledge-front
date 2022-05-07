import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenceRoutingModule } from './licence-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { LicenceFacade } from '../../../core/facade/licence.facade';
import { LicenceService } from '../../../core/services/licence.service';
import { LicenceAdminComponent } from './licence.component';
import { LicenceEditComponent } from './licence-edit/licence-edit.component';
import { LicenceFormComponent } from './licence-form/licence-form.component';

@NgModule({
  declarations: [LicenceAdminComponent, LicenceEditComponent, LicenceFormComponent],
  imports: [
    CommonModule,
    LicenceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [LicenceFacade, LicenceService],
})
export class LicenceModule {}
