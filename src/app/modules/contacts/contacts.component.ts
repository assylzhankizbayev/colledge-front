import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var ymaps: any;

enum ContactTypes {
  Tel = 'tel',
  Email = 'email',
  Address = 'address'
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  CONTACT_TYPES = ContactTypes;
  contacts = [
    { id: 1, value: '+7 (727) 238-12-99', type: ContactTypes.Tel },
    { id: 3, value: '+7 (747) 380-33-12', type: ContactTypes.Tel },
    { id: 4, value: 'kunaev_college@mail.ru', type: ContactTypes.Email },
    { id: 5, value: 'd.a.konaeva@mail.ru', type: ContactTypes.Email },
    { id: 6, value: 'Республика Казахстан, г. Алматы, ул. Толе би, 303', type: ContactTypes.Address }
  ];

  directorsContacts = [
    { id: 1, value: '+7 (727) 238-13-04', type: ContactTypes.Tel },
    { id: 2, value: '+7 (701) 457-20-94', type: ContactTypes.Tel }
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
