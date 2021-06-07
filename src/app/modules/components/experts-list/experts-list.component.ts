import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IExpert } from 'src/app/core/models/expert';

@Component({
  selector: 'app-experts-list',
  templateUrl: './experts-list.component.html',
  styleUrls: ['./experts-list.component.scss']
})
export class ExpertsListComponent implements OnInit {
  @ViewChild('expertsElm', { static: false }) expertsElm: ElementRef;

  @Input() experts: IExpert[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toRight() {
    let elem = this.expertsElm.nativeElement;
    elem.scrollTo({ left: (elem.scrollLeft + 320), behavior: 'smooth' });
  }

  toLeft() {
    let elem = this.expertsElm.nativeElement;
    elem.scrollTo({ left: (elem.scrollLeft - 320), behavior: 'smooth' });
  }
}
