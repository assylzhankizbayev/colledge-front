import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Thumbs } from '../../../core/models/licence.model';
import { ZoomImgModalComponent } from './zoom-img-modal/zoom-img-modal.component';

@Component({
  selector: 'app-img-thumbs',
  templateUrl: './img-thumbs.component.html',
  styleUrls: ['./img-thumbs.component.scss'],
})
export class ImgThumbsComponent implements OnInit {
  @Input() img: Thumbs | null = null;
  @Input() width = 200;
  @Input() height = 300;
  @Input() showTitle: boolean = false;
  @Input() scrollable: boolean = false;
  @Input() enableZoom: boolean = false;
  @Input() enableDownload: boolean = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  zoom(): void {
    this.dialog.open(ZoomImgModalComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        scrollable: this.scrollable,
        img: this.img,
      },
      maxHeight: '95vh',
      height: '100%',
      width: '100%'
    });
  }
}
