import { Component, Input, OnInit } from '@angular/core';
import { IExpert } from 'src/app/core/models/expert';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss']
})
export class ExpertsComponent implements OnInit {
  @Input() expert!: IExpert;
  
  constructor() { }

  ngOnInit(): void {
  }

}
