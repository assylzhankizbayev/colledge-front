import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa-card',
  templateUrl: './qa-card.component.html',
  styleUrls: ['./qa-card.component.scss']
})
export class QaCardComponent implements OnInit {
  toggled = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
