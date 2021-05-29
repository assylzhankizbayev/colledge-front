import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IResearch } from 'src/app/core/models/research';

@Component({
  selector: 'app-mini-carousel',
  templateUrl: './mini-carousel.component.html',
  styleUrls: ['./mini-carousel.component.scss']
})
export class MiniCarouselComponent implements OnInit {

  @Input() miniResearchId: number;
  @Input() gallery: string;
  galleryList: number[] = [];

  
  @ViewChild('carElem', { static: false }) equipmentsElm: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.galleryList = this.gallery.split("|").map(r => +r);
  }

  toRight() {
    let elem = this.equipmentsElm.nativeElement;
    elem.scrollTo({ left: (elem.scrollLeft + 350), behavior: 'smooth' });
  }

  toLeft() {
    let elem = this.equipmentsElm.nativeElement;
    elem.scrollTo({ left: (elem.scrollLeft - 350), behavior: 'smooth' });
  }

}
