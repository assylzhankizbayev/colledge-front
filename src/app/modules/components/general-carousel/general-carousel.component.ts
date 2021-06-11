import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-general-carousel',
  templateUrl: './general-carousel.component.html',
  styleUrls: ['./general-carousel.component.scss']
})
export class GeneralCarouselComponent implements OnInit {
  @Input() data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
