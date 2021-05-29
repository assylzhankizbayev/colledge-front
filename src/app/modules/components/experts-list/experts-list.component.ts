import { Component, Input, OnInit } from '@angular/core';
import { IExpert } from 'src/app/core/models/expert';
import { ExpertService } from 'src/app/core/services/expert.service';

@Component({
  selector: 'app-experts-list',
  templateUrl: './experts-list.component.html',
  styleUrls: ['./experts-list.component.scss']
})
export class ExpertsListComponent implements OnInit {
  @Input() researchId: number;
  experts: IExpert[] = [];

  constructor(private expertsService: ExpertService) { }

  ngOnInit(): void {
    console.log('researchId', this.researchId);
    
    this.expertsService.getExpertByResearchId(this.researchId).subscribe(response => {
      console.log(response);      
      this.experts = response;
    });
  }

}
