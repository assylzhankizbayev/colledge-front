import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchLayoutComponent } from './research-layout/research-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ResearchLayoutComponent }
];

@NgModule({
  declarations: [
    ResearchLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ComponentsModule,
    FormsModule,
  ]
})
export class ResearchModule { }
