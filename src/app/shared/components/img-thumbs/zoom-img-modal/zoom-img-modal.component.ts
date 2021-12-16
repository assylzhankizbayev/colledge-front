import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ILicence } from '../../../../core/models/licence.model';

@Component({
  selector: 'app-zoom-img-modal',
  templateUrl: './zoom-img-modal.component.html',
  styleUrls: ['./zoom-img-modal.component.scss'],
})
export class ZoomImgModalComponent implements OnInit {
  img: ILicence;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { img: ILicence },
    private dialogRef: MatDialogRef<ZoomImgModalComponent>
  ) {
    this.img = data.img;
  }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close();
  }
}
