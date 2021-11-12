import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialtiesRoutingModule } from './specialties-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SpecialtiesComponent } from './specialties.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SpecialtiesComponent
  ],
  imports: [
    CommonModule,
    SpecialtiesRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class SpecialtiesModule { }
