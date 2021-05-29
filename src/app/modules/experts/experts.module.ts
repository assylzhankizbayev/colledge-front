import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertsLayoutComponent } from './experts-layout/experts-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';


const routes: Routes = [
  { path: '', component: ExpertsLayoutComponent }
];

@NgModule({
  declarations: [
    ExpertsLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ]
})
export class ExpertsModule { }
