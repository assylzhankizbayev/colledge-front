import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mini-carousel',
  templateUrl: './mini-carousel.component.html',
  styleUrls: ['./mini-carousel.component.scss']
})
export class MiniCarouselComponent implements OnInit {

  
  @ViewChild('carElem', { static: false }) equipmentsElm: ElementRef;

  constructor() { }

  ngOnInit(): void {
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
