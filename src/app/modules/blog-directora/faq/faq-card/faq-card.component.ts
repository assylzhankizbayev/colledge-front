import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss'],
})
export class FaqCardComponent {
  @Input() question: string | null = null;
  @Input() answer: string | null = null;
}
