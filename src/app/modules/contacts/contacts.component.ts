import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts = [
    { id: 1, value: '+7 (701) 233-58-88 (call-center)', type: 'phone' },
    { id: 2, value: '+7 (727) 350-78-88', type: 'phone' },
    { id: 3, value: '+7 (727) 292-98-77 (факс)', type: 'phone' },
    { id: 4, value: 'info@test.kz', type: 'email' },
    { id: 5, value: 'Республика Казахстан, г. Алматы, <br>ул. Курмангазы 107 (уг.ул. Байтурсынова)', type: 'address' }
  ];
  map: any;
  @ViewChild('yaMap', {static: true}) yaMap: ElementRef;

  constructor() { }

  ngOnInit(): void {
    ymaps.ready()
      .then(() => {
        this.map = new ymaps.Map(
          this.yaMap.nativeElement,
          {
              center: [43.252188, 76.950253],
              zoom: 15,
              controls: []
          },
          {searchControlProvider: 'yandex#search'}
        );
      })
      .catch(() => console.log('Failed to load Yandex Maps'));
  }

}
