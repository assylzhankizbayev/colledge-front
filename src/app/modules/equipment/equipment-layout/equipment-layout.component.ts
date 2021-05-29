import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EquipmentService } from 'src/app/core/services/equipment.service';
import { MiniResearchService } from 'src/app/core/services/mini-research.service';

@Component({
  selector: 'app-equipment-layout',
  templateUrl: './equipment-layout.component.html',
  styleUrls: ['./equipment-layout.component.scss']
})
export class EquipmentLayoutComponent implements OnInit {

  public equipmentInfo: any;
  public galleryPhotos: string[] = [];
  public researchIds: any[] = [];
  public researches: any[] = [];
  public labs: any[] = [];

  constructor(
    private readonly route: ActivatedRoute, 
    private readonly equipmentService: EquipmentService,
    private readonly miniResearch: MiniResearchService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? this.equipmentService.getEquipment(Number(id)) : of(null) 
      })
    )
    .subscribe((result) => {
      console.log(result);
      this.equipmentInfo = result;
      this.galleryPhotos = result.gallery.split('|');
      this.researchIds = result.researchIds.split('|');
      this.labs = result.labIds.split('|');
      console.log(this.labs);
      this.getResearches();
    });
  }

  getResearches() {
    this.researchIds.forEach((id) => {
      this.miniResearch.getOneMiniResearchByResearchId(id).subscribe((result) => {
        this.researches.push(result);
      });
    })
  }

  isPhotoExist(id: string) {
    return this.galleryPhotos.includes(id);
  }

}
