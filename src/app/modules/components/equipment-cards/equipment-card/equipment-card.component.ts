import { Component, Input, OnInit } from '@angular/core';
import { IEquipment } from 'src/app/core/models/equipment';

@Component({
  selector: 'app-equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.scss']
})
export class EquipmentCardComponent implements OnInit {

  @Input() equipment: IEquipment;

  constructor() { }

  ngOnInit(): void {
  }

}
