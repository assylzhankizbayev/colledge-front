import { Component, Input, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/core/services/equipment.service';

@Component({
  selector: 'app-equipment-cards',
  templateUrl: './equipment-cards.component.html',
  styleUrls: ['./equipment-cards.component.scss']
})
export class EquipmentCardsComponent implements OnInit {
  
  data = [
    { id: 1, name: 'Жидкостный термостат КРИО-ВТ-ро-03' },
    { id: 2, name: 'Микроскоп SIAMS' },
    { id: 3, name: 'Оптимум Термостат жидкостный ВТ5-1' },
    { id: 4, name: 'Жидкостный термостат КРИО-ВТ-ро-03' },
    { id: 5, name: 'Микроскоп SIAMS' },
    { id: 6, name: 'Оптимум Термостат жидкостный ВТ5-1' },
  ];

  mockData: any[] = [];

  @Input() public withoutSlider: boolean = false;

  constructor(private readonly equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.equipmentService.getEquipments().subscribe((result) => {
      if(result) {
        this.mockData = result;
      }
    })
  }

}
