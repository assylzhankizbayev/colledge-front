import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-mini-carousel',
  templateUrl: './mini-carousel.component.html',
  styleUrls: ['./mini-carousel.component.scss']
})
export class MiniCarouselComponent implements OnInit {
  @Input() miniResearchId: number;
  @Input() gallery: string;
  galleryList: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.galleryList = this.gallery.split("|").map(r => +r);
  }
}
