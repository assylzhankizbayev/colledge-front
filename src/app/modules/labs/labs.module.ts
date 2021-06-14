import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsLayoutComponent } from './labs-layout/labs-layout.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LabsLayoutComponent }
];

@NgModule({
  declarations: [
    LabsLayoutComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LabsModule { }
