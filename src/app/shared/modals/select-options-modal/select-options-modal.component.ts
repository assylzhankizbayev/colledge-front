import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-options-modal',
  templateUrl: './select-options-modal.component.html',
  styleUrls: ['./select-options-modal.component.scss'],
})
export class SelectOptionsModalComponent {
  selectedId = -1;
  selectedArticle: any;
  list: IListItem[] = [];

  constructor(
    private dialogRef: MatDialogRef<SelectOptionsModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: IData
  ) {
    this.list = data?.list ?? [];
  }

  selectArticle(article: any) {
    this.selectedArticle = article;
    this.selectedId = article?.id;
  }

  select() {
    this.dialogRef.close(this.selectedArticle);
  }

  close(): void {
    this.dialogRef.close(this.selectedArticle);
  }
}

interface IData {
  list: IListItem[];
}

interface IListItem {
  id: number;
  title: string;
}
