import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-general-carousel',
  templateUrl: './general-carousel.component.html',
  styleUrls: ['./general-carousel.component.scss']
})
export class GeneralCarouselComponent implements OnInit {

  @ViewChild('equipmentsElm', { static: false }) equipmentsElm: ElementRef;

  @Input() data: any[] = [];

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
