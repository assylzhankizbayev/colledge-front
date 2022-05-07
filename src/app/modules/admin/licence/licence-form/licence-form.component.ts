import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-licence-form',
  templateUrl: './licence-form.component.html',
  styleUrls: ['./licence-form.component.scss'],
})
export class LicenceFormComponent {
  @Input() form: FormGroup;
  @Output() submit = new EventEmitter();
  @Output() toggle = new EventEmitter();
}
