import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pageYOffset]',
})
export class PageYOffsetDirective {
  @Input() pageYOffset = '';
  
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: any) {
    if (window.pageYOffset > 350) {
      this.el.nativeElement.classList.add(this.pageYOffset);
    } else {
      this.el.nativeElement.classList.remove(this.pageYOffset);
    }
  }
}
