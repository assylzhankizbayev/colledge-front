import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-research-layout',
  templateUrl: './research-layout.component.html',
  styleUrls: ['./research-layout.component.scss']
})
export class ResearchLayoutComponent implements OnInit {

  title = '';
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route
      .paramMap
      .subscribe(params => {
        console.log(params);;
      });
    this.title = this.route.snapshot.queryParamMap.get('title') || '';
  }

}
