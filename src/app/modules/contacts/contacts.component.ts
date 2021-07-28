import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var ymaps: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts = [
    { id: 1, value: '+7 (727) 228-18-97', type: 'phone' },
    { id: 2, value: '+7 (701) 513-11-55', type: 'phone' },
    { id: 3, value: '+7 (747) 063-80-10', type: 'phone' },
    { id: 4, value: 'kunaev_college@mail.ru', type: 'email' },
    { id: 5, value: 'd.a.konaeva@mail.ru', type: 'email' },
    { id: 6, value: 'Республика Казахстан, г. Алматы, ул. Толе би, 303', type: 'address' }
  ];

  directorsContacts = [
    { id: 1, value: '+7 (727) 228-17-52', type: 'phone' },
    { id: 2, value: '+7 (701) 457-20-94', type: 'phone' }
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
              center: [43.242358, 76.842339],
              zoom: 15,
              controls: []
          },
          {searchControlProvider: 'yandex#search'}
        );
      })
      .catch(() => console.log('Failed to load Yandex Maps'));
  }

}
