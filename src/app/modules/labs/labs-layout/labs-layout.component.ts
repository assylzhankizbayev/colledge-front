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
  selector: 'app-labs-layout',
  templateUrl: './labs-layout.component.html',
  styleUrls: ['./labs-layout.component.scss']
})
export class LabsLayoutComponent implements OnInit {

  noData: boolean = false;
  type: string = '';
  industrieId: number = -1;
  searchControl = new FormControl();
  labs: ILab[] = [];
  labsCopy: ILab[] = [];
  industries: IIndustry[] = [];
  industriesEx: IIndustryEx[] = [];
  selectedIndustrie: IIndustry = { 
    id: -1, 
    name: 'Все' 
  };

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
    this.getIndustries();

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
        if(res === null) {
          this.type = 'labs';
          this.loading = true;

          this.labService.getLabs().subscribe(res => {
            console.log(res);
            this.labs = res;
            this.labsCopy = res;
          });

          setTimeout(() => {
            this.loading = false;
          }, 500);
        }
        if (Array.isArray(res)) {
          this.type = 'lab';
          this.lab = res[0];
          this.title = this.lab.name;
          if (this.labId) {
            this.loadEquipments(this.labId);
          }
        }
      });

    this.searchControl.valueChanges
    .pipe(
      tap(_ => {
        this.loading = true;
      }),
      debounceTime(500)
    )
    .subscribe(res => {
      let searchText = res.toLocaleLowerCase();
      this.labs = this.labsCopy.filter(lab => {
        let result = lab.name.toLocaleLowerCase().includes(searchText);
        return result;
      });
      this.noData = this.labs.length ? false : true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
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

  getIndustries() {
    this.service.getIndustries().subscribe(res => {
      this.industries = res;
      this.industries.unshift(this.selectedIndustrie);
    })
  }

  selectIndustrie(ind: IIndustry) {
    // this.selectedIndustrie = ind;
    // this.loading = true;
    // this.researchService.getResearchByIndId(ind.id).subscribe(res => {
    //   if (ind.id === -1) {
    //     this.transformData(res);
    //   } else {
    //     this.industriesEx = [{
    //         id: ind.id,
    //         name: ind.name,
    //         research: res
    //     }];
    //   }
    //   setTimeout(() => {
    //     this.loading = false;
    //   }, 300);
    // });
  }

  transformData(research: IResearch[]) {
    // this.industriesEx = this.industries.map(r => {
    //   let data = research.filter(f => f.industrieId === r.id);
    //   return {
    //     id:r.id,
    //     name:r.name,
    //     research: data
    //   }
    // });
  }
}
