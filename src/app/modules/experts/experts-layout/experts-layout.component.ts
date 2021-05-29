import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IExpert } from 'src/app/core/models/expert';
import { IMiniResearch } from 'src/app/core/models/research';
import { ExpertService } from 'src/app/core/services/expert.service';
import { MiniResearchService } from 'src/app/core/services/mini-research.service';

@Component({
  selector: 'app-experts-layout',
  templateUrl: './experts-layout.component.html',
  styleUrls: ['./experts-layout.component.scss']
})
export class ExpertsLayoutComponent implements OnInit {

  expert: IExpert;
  miniResearches: IMiniResearch[] = [];

  constructor(private route: ActivatedRoute,
    private expertService: ExpertService,
    private miniReserachService: MiniResearchService,) { }

  ngOnInit(): void {
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
      this.miniReserachService.getMiniResearchByExpertId(id)
    ]).subscribe(res => {
      this.miniReserachService = res[0];
      console.log(this.miniReserachService);
    });
  }

}
