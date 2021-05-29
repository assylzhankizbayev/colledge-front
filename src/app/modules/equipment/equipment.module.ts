import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentLayoutComponent } from './equipment-layout/equipment-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  { path: '', component: EquipmentLayoutComponent }
];

@NgModule({
  declarations: [
    EquipmentLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    MaterialModule,
  ]
})
export class EquipmentModule { }
