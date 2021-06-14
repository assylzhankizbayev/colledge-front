import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsLayoutComponent } from './labs-layout/labs-layout.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabaratoryComponent } from './labaratory/labaratory.component';

const routes: Routes = [
  { path: '', component: LabsLayoutComponent, pathMatch: 'full' },
  { path: ':id', component: LabaratoryComponent }
];

@NgModule({
  declarations: [
    LabsLayoutComponent,
    LabaratoryComponent,
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
