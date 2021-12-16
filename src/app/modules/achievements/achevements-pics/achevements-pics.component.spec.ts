import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchevementsPicsComponent } from './achevements-pics.component';

describe('AchevementsPicsComponent', () => {
  let component: AchevementsPicsComponent;
  let fixture: ComponentFixture<AchevementsPicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchevementsPicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchevementsPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
