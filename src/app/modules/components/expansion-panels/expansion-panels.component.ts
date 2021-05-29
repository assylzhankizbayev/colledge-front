import { Component, Input, OnInit } from '@angular/core';
import { IMiniResearch } from 'src/app/core/models/research';

@Component({
  selector: 'app-expansion-panels',
  templateUrl: './expansion-panels.component.html',
  styleUrls: ['./expansion-panels.component.scss']
})
export class ExpansionPanelsComponent implements OnInit {
  @Input() researches: IMiniResearch[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
