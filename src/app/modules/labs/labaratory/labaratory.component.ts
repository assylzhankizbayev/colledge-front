import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, forkJoin, of, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil, tap } from 'rxjs/operators';
import { IEquipment } from 'src/app/core/models/equipment';
import { ILab } from 'src/app/core/models/lab';
import { IMiniResearch, IResearch } from 'src/app/core/models/research';
import { CommonService } from 'src/app/core/services/common.service';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { LabService } from 'src/app/core/services/lab.service';
import { MiniResearchService } from 'src/app/core/services/mini-research.service';
import { ResearchService } from 'src/app/core/services/research.service';
import { IIndustry, IIndustryEx } from '../../landing/interface';

@Component({
  selector: 'app-labaratory',
  templateUrl: './labaratory.component.html',
  styleUrls: ['./labaratory.component.scss']
})
export class LabaratoryComponent implements OnInit {


  destroy$ = new Subject();
  lab: ILab;
  title = '';
  menu = [
    { name: "Исследования" },
    { name: "Сотрудники" },
    { name: "Оборудование" },
    { name: "Контакты" },
  ];
  labId: number;
  equipments: IEquipment[] = [];
  miniResearches: IMiniResearch[] = [];
  loading = false;


  constructor(
    private route: ActivatedRoute,
    private labService: LabService,
    private equipmentService: EquipmentService,
    private miniResearchService: MiniResearchService,
    private researchService: ResearchService,
    private service: CommonService,) { }

  ngOnInit(): void {
    window.scroll(0,0);

    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(params => {
          const id = params.get('id');
          this.labId = id ? +id : 0;
          return id
            ? combineLatest([
              this.labService.getLab(+id),
            ])
            : of(null);
        })
      )
      .subscribe(res => {
        if (Array.isArray(res)) {
          this.lab = res[0];
          this.title = this.lab.name;
          if (this.labId) {
            this.loadEquipments(this.labId);
          }
        }
        console.log(res);
        console.log(this.lab);

      });
  }

  loadEquipments(id: number) {
    this.loading = true;
    forkJoin([
      this.equipmentService.getEquipmentsByLabId(id),
      this.miniResearchService.getMiniResearchByLabId(id)
    ])
    .subscribe(res => {
      this.equipments = res[0];
      this.miniResearches = res[1];
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }


 
}
