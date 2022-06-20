import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';
import { FaqFormComponent } from './faq-form/faq-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { FaqService } from '../../../core/services/faq.service';
import { FaqEditComponent } from './faq-edit/faq-edit.component';


@NgModule({
  declarations: [
    FaqComponent,
    FaqFormComponent,
    FaqEditComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FaqService
  ]
})
export class FaqModule { }
