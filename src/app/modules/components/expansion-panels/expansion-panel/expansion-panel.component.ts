import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IEquipment } from 'src/app/core/models/equipment';
import { ILab } from 'src/app/core/models/lab';
import { IMiniResearch } from 'src/app/core/models/research';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { LabService } from 'src/app/core/services/lab.service';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit, OnDestroy {
  @Input() miniResearch!: IMiniResearch;
  panelOpenState = false;
  equipments: IEquipment[] = [];
  labs: ILab[] = [];
  isToggled = false;
  destroy$ = new Subject();

  constructor(
    private equipmentService: EquipmentService,
    private labService: LabService
  ) {}

  ngOnInit(): void {    
  }

  togglePanelState() {
    this.panelOpenState = !this.panelOpenState;

    if (this.panelOpenState && !this.isToggled) {
      this.getMiniResearchData();
    }

    if (!this.isToggled) {
      this.isToggled = true;
    }
  }

  getMiniResearchData() {
    combineLatest([
      this.equipmentService.getEquipmentsByMinResearchId(this.miniResearch.id),
      this.labService.getLabsByMiniResearchId(this.miniResearch.id)  
    ])
    .pipe(takeUntil(this.destroy$))
    .subscribe(([equipments, labs]) => {
      this.equipments = equipments;
      this.labs = labs;

      console.log('labs', labs);
      
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
