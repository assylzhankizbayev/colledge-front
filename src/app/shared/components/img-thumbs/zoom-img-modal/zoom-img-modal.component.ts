import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Thumbs } from '../../../../core/models/licence.model';

@Component({
  selector: 'app-zoom-img-modal',
  templateUrl: './zoom-img-modal.component.html',
  styleUrls: ['./zoom-img-modal.component.scss'],
})
export class ZoomImgModalComponent implements OnInit {
  img: Thumbs | null = null;
  scrollable: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { img: Thumbs, scrollable: boolean },
    private dialogRef: MatDialogRef<ZoomImgModalComponent>
  ) {
    this.img = data.img;
    this.scrollable = data.scrollable;
  }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }
}
