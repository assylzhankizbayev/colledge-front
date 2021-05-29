import { Component, Input, OnInit } from '@angular/core';
import { IEquipment } from 'src/app/core/models/equipment';
import { EquipmentService } from 'src/app/core/services/equipment.service';

@Component({
  selector: 'app-equipment-cards',
  templateUrl: './equipment-cards.component.html',
  styleUrls: ['./equipment-cards.component.scss']
})
export class EquipmentCardsComponent implements OnInit {
  
  @Input() equipments: IEquipment[] = [];
  @Input() public isHeader: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }
}
