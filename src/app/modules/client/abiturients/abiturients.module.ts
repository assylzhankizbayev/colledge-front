import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbiturientsComponent } from './abiturients.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { AbiturientsDetailsComponent } from './abiturients-details/abiturients-details.component';

const routes: Routes = [
  { path: '', component: AbiturientsComponent },
  { path: ':id', component: AbiturientsDetailsComponent },
];

@NgModule({
  declarations: [
    AbiturientsComponent,
    AbiturientsDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
  ]
})
export class AbiturientsModule { }