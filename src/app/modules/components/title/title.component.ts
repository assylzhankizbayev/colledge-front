import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() public verySmall: boolean = false;
  @Input() public isSmall: boolean = false;
  @Input() public big: boolean = false;
  
  @Input() public text: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

}
