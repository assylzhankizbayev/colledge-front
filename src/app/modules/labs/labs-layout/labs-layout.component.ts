

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
import { ILab } from 'src/app/core/models/lab';
import { IResearch } from 'src/app/core/models/research';
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
  loading = false;

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

  constructor(
    private labService: LabService,
    private equipmentService: EquipmentService,
    private miniResearchService: MiniResearchService,
    private researchService: ResearchService,
    private service: CommonService,
  ) { }

  ngOnInit(): void {
    this.getIndustries();

    this.loading = true;

    this.labService.getLabs().subscribe(res => {
      console.log(res);
      this.labs = res;
      this.labsCopy = res;

      setTimeout(() => {
        this.loading = false;
      }, 500);
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
