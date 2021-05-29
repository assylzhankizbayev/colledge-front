import { Component, Input, OnInit } from '@angular/core';
import { IEquipment } from 'src/app/core/models/equipment';
import { IMiniResearch } from 'src/app/core/models/research';
import { EquipmentService } from 'src/app/core/services/equipment.service';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {
  @Input() miniResearch!: IMiniResearch;
  panelOpenState = false;
  equipments: IEquipment[] = [];
  
  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.equipmentService.getEquipmentsByMinResearchId(this.miniResearch.id).subscribe(res => {
      this.equipments = res;
    });
  }

}
