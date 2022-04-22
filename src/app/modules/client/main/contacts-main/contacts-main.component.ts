import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-contacts-main',
  templateUrl: './contacts-main.component.html',
  styleUrls: ['./contacts-main.component.scss'],
})
export class ContactsMainComponent implements OnInit {
  map: any;
  @ViewChild('yaMap', { static: true }) yaMap: ElementRef;

  constructor() {}

  ngOnInit(): void {
    ymaps
      .ready()
      .then(() => {
        this.map = new ymaps.Map(
          this.yaMap.nativeElement,
          {
            center: [43.242358, 76.842339],
            zoom: 15,
            controls: [],
          },
          { searchControlProvider: 'yandex#search' }
        );
      })
      .catch(() => console.log('Failed to load Yandex Maps'));
  }
}
