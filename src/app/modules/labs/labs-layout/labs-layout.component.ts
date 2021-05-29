import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, of, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IEquipment } from 'src/app/core/models/equipment';
import { ILab } from 'src/app/core/models/lab';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { LabService } from 'src/app/core/services/lab.service';

@Component({
  selector: 'app-labs-layout',
  templateUrl: './labs-layout.component.html',
  styleUrls: ['./labs-layout.component.scss']
})
export class LabsLayoutComponent implements OnInit {
  
  destroy$ = new Subject();
  lab:ILab;
  title = '';
  menu = [
    { name: "Исследования" },
    { name: "Сотрудники" },
    { name: "Оборудование" },
    { name: "Контакты" },
  ];
  labId: number;
  equipments: IEquipment[] = [];


  constructor(
    private route: ActivatedRoute,
    private labService: LabService,
    private equipmentService: EquipmentService) { }

  ngOnInit(): void {

    this.route.paramMap
    .pipe(
      takeUntil(this.destroy$),
      switchMap(params => {
        const id = params.get('id');
        this.labId = id ? +id : 0;
        return id 
          ? combineLatest([
            this.labService.getLab(+id),
            // this.miniResearchService.getOneMiniResearchByResearchId(+id)
          ])
          : of(null);
      })
    )
    .subscribe(res => {
      if (Array.isArray(res)) {
        this.lab = res[0];
        this.title = this.lab.name;
        if (this.labId)  {
          this.loadEquipments(this.labId)
        }
      }
    });


  }

  loadEquipments(id: number) {
    this.equipmentService.getEquipmentsByLabId(id).subscribe(res => {
      console.log(res);
      this.equipments = res;
    });
  }


}
