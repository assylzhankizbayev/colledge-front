import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions, Zoom } from "swiper/core";

SwiperCore.use([Zoom, Navigation]);

@Component({
  selector: 'app-mini-carousel',
  templateUrl: './mini-carousel.component.html',
  styleUrls: ['./mini-carousel.component.scss']
})
export class MiniCarouselComponent implements OnInit {
  @Input() miniResearchId: number;
  @Input() gallery: string;
  galleryList: number[] = [];
  swiper: SwiperCore;
  swiperParams: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 16,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    breakpoints: {
      '320': {
        slidesPerView: 2,
        spaceBetween: 0
      },
      '500': {
        slidesPerView: 3,
        spaceBetween: 0
      },
      '640': {
        slidesPerView: 4,
        spaceBetween: 5
      },
      '768': {
        slidesPerView: 5,
        spaceBetween: 5
      },
      '1024': {
        slidesPerView: 6,
        spaceBetween: 5
      },
      '1400': {
        slidesPerView: 8,
        spaceBetween: 5
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.galleryList = this.gallery.split("|").map(r => +r);
  }
}
