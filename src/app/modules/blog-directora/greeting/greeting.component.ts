import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  showModal() {
    const dialogRef = this.dialog.open(FormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
