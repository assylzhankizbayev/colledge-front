import { Component, Input, OnInit } from '@angular/core';
import { ILicence } from '../../../core/models/licence.model';

@Component({
  selector: 'app-img-thumbs',
  templateUrl: './img-thumbs.component.html',
  styleUrls: ['./img-thumbs.component.scss']
})
export class ImgThumbsComponent implements OnInit {
  @Input() img: ILicence;

  constructor() { }

  ngOnInit(): void {
  }
}


