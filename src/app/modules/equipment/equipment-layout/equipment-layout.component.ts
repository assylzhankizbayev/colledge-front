import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IEquipment } from 'src/app/core/models/equipment';
import { ILab } from 'src/app/core/models/lab';
import { IMiniResearch } from 'src/app/core/models/research';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { LabService } from 'src/app/core/services/lab.service';
import { MiniResearchService } from 'src/app/core/services/mini-research.service';

@Component({
  selector: 'app-equipment-layout',
  templateUrl: './equipment-layout.component.html',
  styleUrls: ['./equipment-layout.component.scss']
})
export class EquipmentLayoutComponent implements OnInit {

  public equipmentInfo: any;
  public galleryPhotos: string[] = [];
  public researchIds: number[] = [];
  public miniResearches: IMiniResearch[] = [];
  public labs: ILab[] = [];
  public loading: boolean = true;

  constructor(
    private readonly route: ActivatedRoute, 
    private readonly equipmentService: EquipmentService,
    private readonly miniResearch: MiniResearchService,
    private labService: LabService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? this.equipmentService.getEquipment(Number(id)) : of(null) 
      })
    )
    .subscribe((result:IEquipment) => {
      this.equipmentInfo = result;
      this.galleryPhotos = result.gallery.split('|');
      this.researchIds = result.researchIds.split('|').map(r => +r);
      this.getMiniResearches(result.id);
    });

    setTimeout(() => {
      this.loading = false;
    }, 500)
  }

  getMiniResearches(id: number) {
    this.miniResearch.getMiniResearchByEquipmentId(id).subscribe(result => {
      this.miniResearches = result;
    });
    this.labService.getLabsByMiniResearchId(id).subscribe(res => {
      this.labs = res;
    });
  }

  isPhotoExist(id: string) {
    return this.galleryPhotos.includes(id);
  }

}
