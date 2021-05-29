import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IExpert } from 'src/app/core/models/expert';
import { ExpertService } from 'src/app/core/services/expert.service';

@Component({
  selector: 'app-experts-layout',
  templateUrl: './experts-layout.component.html',
  styleUrls: ['./experts-layout.component.scss']
})
export class ExpertsLayoutComponent implements OnInit {

  expert: IExpert;

  constructor(private route: ActivatedRoute,
    private expertService: ExpertService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.expertService.getExpert(+id).subscribe(res => {
          console.log(res);
          this.expert = res;
        });
      }
    });
  }

}
