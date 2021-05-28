import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: LayoutComponent }
];


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingModule { }
