import { Component, Input, OnInit } from '@angular/core';
import { IEquipment } from 'src/app/core/models/equipment';
import { EquipmentService } from 'src/app/core/services/equipment.service';

@Component({
  selector: 'app-equipment-cards',
  templateUrl: './equipment-cards.component.html',
  styleUrls: ['./equipment-cards.component.scss']
})
export class EquipmentCardsComponent implements OnInit {
  
  equipments: IEquipment[] = [];

  @Input() public withoutSlider: boolean = false;
  @Input() public isHeader: boolean = false;

  constructor(private readonly equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.equipmentService.getEquipments().subscribe((result) => {
      if(result) {
        this.equipments = result;
      }
    });
  }
}
