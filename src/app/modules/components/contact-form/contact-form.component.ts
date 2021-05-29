import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() title = 'Затрудняетесь с выбором исследования?';

  contact = new FormControl(null, Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  sendContact() {
  }

}
