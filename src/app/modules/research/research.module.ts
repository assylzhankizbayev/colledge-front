import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResearchLayoutComponent } from './research-layout/research-layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ResearchLayoutComponent }
];

@NgModule({
  declarations: [
    ResearchLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ResearchModule { }
