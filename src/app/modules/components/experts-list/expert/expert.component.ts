import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IExpert } from 'src/app/core/models/expert';
import { ConsultationFormComponent } from '../../consultation-form/consultation-form.component';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {
  @Input() expert!: IExpert;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ConsultationFormComponent, {
      panelClass:'custom-dialog-container',
      data: {hedTitle: 'Получить консультацию'}
    });
  }

}
