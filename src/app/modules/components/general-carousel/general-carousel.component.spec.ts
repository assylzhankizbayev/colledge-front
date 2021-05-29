import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCarouselComponent } from './general-carousel.component';

describe('GeneralCarouselComponent', () => {
  let component: GeneralCarouselComponent;
  let fixture: ComponentFixture<GeneralCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
