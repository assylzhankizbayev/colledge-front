import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from "swiper/core";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-general-carousel',
  templateUrl: './general-carousel.component.html',
  styleUrls: ['./general-carousel.component.scss']
})
export class GeneralCarouselComponent implements OnInit {
  @Input() data: any[] = [];
  swiperParams: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 16,
    navigation: {
      nextEl: '.equipments-next',
      prevEl: '.equipments-prev'
    },
    breakpoints: {
      '320': {
        slidesPerView: 1,
        spaceBetween: 5
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 5
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 5
      }
    }
  };
  
  constructor() { }

  ngOnInit(): void {
  }
}
