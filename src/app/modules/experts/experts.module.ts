import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertsLayoutComponent } from './experts-layout/experts-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { ExpertsMainComponent } from './experts-main/experts-main.component';


const routes: Routes = [
  { path: '', component: ExpertsMainComponent },
  { path: ':id', component: ExpertsLayoutComponent }
];

@NgModule({
  declarations: [
    ExpertsLayoutComponent,
    ExpertsMainComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class ExpertsModule { }
