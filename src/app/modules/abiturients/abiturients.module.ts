import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbiturientsComponent } from './abiturients.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../app/shared/shared.module';
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
    MaterialModule,
    FormsModule,
    SharedModule,
  ]
})
export class AbiturientsModule { }
