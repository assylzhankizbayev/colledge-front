import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ExpansionPanelsComponent } from './expansion-panels/expansion-panels.component';
import { ExpansionPanelComponent } from './expansion-panels/expansion-panel/expansion-panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { EquipmentCardsComponent } from './equipment-cards/equipment-cards.component';
import { EquipmentCardComponent } from './equipment-cards/equipment-card/equipment-card.component';
import { GeneralCarouselComponent } from './general-carousel/general-carousel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ExpansionPanelsComponent,
    ExpansionPanelComponent,
    ContactFormComponent,
    EquipmentCardsComponent,
    EquipmentCardComponent,
    GeneralCarouselComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ExpansionPanelsComponent,
    ExpansionPanelComponent,
    ContactFormComponent,
    EquipmentCardsComponent,
    EquipmentCardComponent,
    GeneralCarouselComponent,
  ]
})
export class ComponentsModule { }
