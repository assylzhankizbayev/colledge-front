import { Component, Input, OnInit } from '@angular/core';
import { ILabExperts } from 'src/app/core/models/lab';
import SwiperCore, { Navigation, SwiperOptions } from "swiper/core";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-lab-experts',
  templateUrl: './lab-experts.component.html',
  styleUrls: ['./lab-experts.component.scss']
})
export class LabExpertsComponent implements OnInit {
  @Input() lab?: ILabExperts;
  swiperParams: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 16,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev'
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
