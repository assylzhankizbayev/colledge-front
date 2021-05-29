import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILab } from 'src/app/core/models/lab';

@Component({
  selector: 'app-labs-list',
  templateUrl: './labs-list.component.html',
  styleUrls: ['./labs-list.component.scss']
})
export class LabsListComponent implements OnInit {
  @Input() labs: ILab[] = [];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLab(id: number) {
    this.router.navigate(['/labs', id]);
  }

}
