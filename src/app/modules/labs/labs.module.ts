import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabsLayoutComponent } from './labs-layout/labs-layout.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(routes),
  ]
})
export class LabsModule { }
