import { Component, OnInit } from '@angular/core';
import { AchievementsFacade } from '../../../core/facade/achievements.facade';

@Component({
  selector: 'app-client-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsClientComponent implements OnInit {
  readonly title$ = this.achievementsFacade.title;
  readonly body$ = this.achievementsFacade.body;

  constructor(private achievementsFacade: AchievementsFacade) { }

  ngOnInit(): void {
    this.achievementsFacade.init();
  }
}
