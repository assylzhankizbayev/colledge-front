import { Component, Input, OnInit } from '@angular/core';
import { IMiniResearch } from 'src/app/core/models/research';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  @Input() research!: IMiniResearch;
  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
