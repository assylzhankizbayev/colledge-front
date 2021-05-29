import { Component, Input, OnInit } from '@angular/core';
import { IEquipment } from 'src/app/core/models/equipment';
import { EquipmentService } from 'src/app/core/services/equipment.service';

@Component({
  selector: 'app-labs-layout',
  templateUrl: './labs-layout.component.html',
  styleUrls: ['./labs-layout.component.scss']
})
export class LabsLayoutComponent implements OnInit {
  
  equipments: IEquipment[] = [];

  constructor(private readonly equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.equipmentService.getEquipments().subscribe((result) => {
      if(result) {
        this.equipments = result;
      }
    });
  }
}
