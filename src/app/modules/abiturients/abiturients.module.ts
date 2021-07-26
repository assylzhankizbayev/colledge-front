import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbiturientsComponent } from './abiturients.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: AbiturientsComponent }
];

@NgModule({
  declarations: [
    AbiturientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // ReactiveFormsModule,
    // SwiperModule,
    MaterialModule,
    FormsModule,
    SharedModule,
  ]
})
export class AbiturientsModule { }
