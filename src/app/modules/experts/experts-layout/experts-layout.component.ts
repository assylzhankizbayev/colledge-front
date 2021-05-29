import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IEquipment } from 'src/app/core/models/equipment';
import { IExpert } from 'src/app/core/models/expert';
import { ILab } from 'src/app/core/models/lab';
import { IMiniResearch } from 'src/app/core/models/research';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { ExpertService } from 'src/app/core/services/expert.service';
import { LabService } from 'src/app/core/services/lab.service';
import { MiniResearchService } from 'src/app/core/services/mini-research.service';

@Component({
  selector: 'app-experts-layout',
  templateUrl: './experts-layout.component.html',
  styleUrls: ['./experts-layout.component.scss']
})
export class ExpertsLayoutComponent implements OnInit {

  expert: IExpert;
  miniResearches: IMiniResearch[] = [];
  labs: ILab[] = [];
  equipments: IEquipment[] = [];

  constructor(private route: ActivatedRoute,
    private expertService: ExpertService,
    private miniReserachService: MiniResearchService,
    private labService: LabService,
    private equipmentService: EquipmentService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.expertService.getExpert(+id).subscribe(res => {
          this.expert = res;
          this.getData(+id);
        });
      }
    });
  }

  getData(id: number) {
    forkJoin([
      this.miniReserachService.getMiniResearchByExpertId(id),
      this.labService.getLabsByExpertId(id),
      this.equipmentService.getEquipmentsByExpertId(id)
    ]).subscribe(res => {
      this.miniResearches = res[0];
      this.labs = res[1];
      this.equipments = res[2];
    });
  }

}
