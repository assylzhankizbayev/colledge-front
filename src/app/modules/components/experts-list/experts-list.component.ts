import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper/core';
import { IExpert } from '../../../core/models/expert';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-experts-list',
  templateUrl: './experts-list.component.html',
  styleUrls: ['./experts-list.component.scss']
})
export class ExpertsListComponent implements OnInit {
  @Input() experts: IExpert[] = [];
  swiperParams: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 16,
    navigation: {
      nextEl: '.experts-next',
      prevEl: '.experts-prev'
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
      },
      '1400': {
        slidesPerView: 4,
        spaceBetween: 5
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
