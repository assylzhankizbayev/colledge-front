import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { GeneralCarouselComponent } from './general-carousel/general-carousel.component';
import { RouterModule } from '@angular/router';
import { MiniCarouselComponent } from './mini-carousel/mini-carousel.component';
import { SeparatorPipe } from 'src/app/shared/pipes/separator.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    GeneralCarouselComponent,
    MiniCarouselComponent,
    SeparatorPipe,
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
    GeneralCarouselComponent,
  ]
})
export class ComponentsModule { }
