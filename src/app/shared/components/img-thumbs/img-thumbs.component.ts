import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-thumbs',
  templateUrl: './img-thumbs.component.html',
  styleUrls: ['./img-thumbs.component.scss']
})
export class ImgThumbsComponent implements OnInit {
  @Input() img: IImg;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface IImg {
  title: string;
  link: string;
  src: string;
}
