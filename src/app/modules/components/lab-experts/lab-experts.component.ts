import { Component, Input, OnInit } from '@angular/core';
import { ILabExperts } from 'src/app/core/models/lab';

@Component({
  selector: 'app-lab-experts',
  templateUrl: './lab-experts.component.html',
  styleUrls: ['./lab-experts.component.scss']
})
export class LabExpertsComponent implements OnInit {
  @Input() lab?: ILabExperts;

  constructor() { }

  ngOnInit(): void {
  }
}
