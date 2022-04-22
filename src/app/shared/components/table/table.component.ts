import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategoryItem } from '../../../core/models/category.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() displayedColumns: string[] = ['id', 'title', 'author', 'created_at', 'controls'];
  @Input() dataSource: any | ICategoryItem[] = [];
  @Input() titleLink: string[] = [];
  @Output() edit = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  constructor() { }
}
