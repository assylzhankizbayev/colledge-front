import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
  { path: '', component: LayoutComponent }
];


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class LandingModule { }
