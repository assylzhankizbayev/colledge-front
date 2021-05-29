import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';
import { ExpansionPanelComponent } from './expansion-panels/expansion-panel/expansion-panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { EquipmentCardsComponent } from './equipment-cards/equipment-cards.component';
import { EquipmentCardComponent } from './equipment-cards/equipment-card/equipment-card.component';

@NgModule({
  declarations: [
    ExpansionPanelsComponent,
    ExpansionPanelComponent,
    ContactFormComponent,
    EquipmentCardsComponent,
    EquipmentCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ExpansionPanelsComponent,
    ExpansionPanelComponent,
    ContactFormComponent,
    EquipmentCardsComponent,
    EquipmentCardComponent,
  ]
})
export class ComponentsModule { }
