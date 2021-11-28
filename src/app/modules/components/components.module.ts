import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GeneralCarouselComponent } from './general-carousel/general-carousel.component';
import { RouterModule } from '@angular/router';
import { MiniCarouselComponent } from './mini-carousel/mini-carousel.component';
import { SeparatorPipe } from 'src/app/shared/pipes/separator.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TitleComponent } from './title/title.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    ContactFormComponent,
    GeneralCarouselComponent,
    MiniCarouselComponent,
    SeparatorPipe,
    ConfirmDialogComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    SwiperModule
  ],
  exports: [
    ContactFormComponent,
    GeneralCarouselComponent,
    TitleComponent
  ]
})
export class ComponentsModule { }
