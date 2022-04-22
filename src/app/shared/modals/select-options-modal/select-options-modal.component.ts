import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-options-modal',
  templateUrl: './select-options-modal.component.html',
  styleUrls: ['./select-options-modal.component.scss']
})
export class SelectOptionsModalComponent implements OnInit {
  selectedId = -1;
  selectedArticle: any;

  constructor(
    private dialogRef: MatDialogRef<SelectOptionsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IData
  ) { }

  ngOnInit(): void {
  }

  selectArticle(article: any) {
    this.selectedArticle = article;
    this.selectedId = article?.id;
  }

  select() {
    this.dialogRef.close(this.selectedArticle);
  }

  close(): void {
    this.dialogRef.close();
  }

}

interface IData {
  list: IListItem[];
}

interface IListItem {
  id: number;
  title: string;
}
