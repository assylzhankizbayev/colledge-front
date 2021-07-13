import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper/core';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-student-life-gallery',
  templateUrl: './student-life-gallery.component.html',
  styleUrls: ['./student-life-gallery.component.scss']
})
export class StudentLifeGalleryComponent implements OnInit {
  swiperParams: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.slide-next',
      prevEl: '.slide-prev'
    },
    breakpoints: {
      '320': {
        slidesPerView: 1,
        spaceBetween: 0
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 24
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
