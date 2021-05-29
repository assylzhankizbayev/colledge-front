import { Component, Input, OnInit } from '@angular/core';
import { IExpert } from 'src/app/core/models/expert';

@Component({
  selector: 'app-experts-list',
  templateUrl: './experts-list.component.html',
  styleUrls: ['./experts-list.component.scss']
})
export class ExpertsListComponent implements OnInit {
  @Input() experts: IExpert[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
