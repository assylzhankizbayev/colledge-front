import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { MaterialModule } from '../material/material.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EquipmentCardsComponent } from './equipment-cards/equipment-cards.component';
import { EquipmentCardComponent } from './equipment-cards/equipment-card/equipment-card.component';
import { GeneralCarouselComponent } from './general-carousel/general-carousel.component';



@NgModule({
  declarations: [
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
  ],
  exports: [
    ExpansionPanelComponent,
    ContactFormComponent,
    EquipmentCardsComponent,
    EquipmentCardComponent,
    GeneralCarouselComponent,
  ]
})
export class ComponentsModule { }
