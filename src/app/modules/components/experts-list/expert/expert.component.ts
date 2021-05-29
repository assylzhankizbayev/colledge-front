import { Component, Input, OnInit } from '@angular/core';
import { IExpert } from 'src/app/core/models/expert';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {
  @Input() expert!: IExpert;
  
  constructor() { }

  ngOnInit(): void {
  }

}
