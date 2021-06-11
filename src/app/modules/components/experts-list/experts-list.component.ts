import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation } from 'swiper/core';
import { IExpert } from '../../../core/models/expert';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-experts-list',
  templateUrl: './experts-list.component.html',
  styleUrls: ['./experts-list.component.scss']
})
export class ExpertsListComponent implements OnInit {
  @Input() experts: IExpert[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
