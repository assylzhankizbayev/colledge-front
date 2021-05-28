import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MaterialModule } from '../material/material.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExpansionPanelComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ExpansionPanelComponent,
    ContactFormComponent,
  ]
})
export class ComponentsModule { }
