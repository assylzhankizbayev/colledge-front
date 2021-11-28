import { Component, OnInit } from '@angular/core';
import { AboutFacade } from '../../core/facade/about.facade';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  readonly title$ = this.aboutFacade.title;
  readonly body$ = this.aboutFacade.body;

  constructor(private aboutFacade: AboutFacade) { }

  ngOnInit(): void {
    this.aboutFacade.init();
  }
}
