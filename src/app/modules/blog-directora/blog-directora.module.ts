import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDirectoraRoutingModule } from './blog-directora-routing.module';
import { FaqComponent } from './faq/faq.component';
import { FormComponent } from './form/form.component';
import { GreetingComponent } from './greeting/greeting.component';
import { SharedModule } from '../../shared/shared.module';
import { QuestionsComponent } from './questions/questions.component';
import { BlogDirectoraComponent } from './blog-directora.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { QaCardComponent } from './questions/qa-card/qa-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
    FaqComponent,
    GreetingComponent,
    QuestionsComponent,
    BlogDirectoraComponent,
    QaCardComponent,
  ],
  imports: [
    CommonModule,
    BlogDirectoraRoutingModule,
    SharedModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
})
export class BlogDirectoraModule {}
