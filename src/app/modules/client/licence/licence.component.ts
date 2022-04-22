import { Component, OnInit } from '@angular/core';
import { LicenceFacade } from '../../../core/facade/licence.facade';

@Component({
  selector: 'app-client-licence',
  templateUrl: './licence.component.html',
  styleUrls: ['./licence.component.scss'],
})
export class LicenceClientComponent implements OnInit {
  readonly title$ = this.licenceFacade.title;
  readonly licences$ = this.licenceFacade.licences;

  constructor(private licenceFacade: LicenceFacade) {}

  ngOnInit(): void {
    this.licenceFacade.init();
  }
}
