import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiturientsDetailsComponent } from './abiturients-details.component';

describe('AbiturientsDetailsComponent', () => {
  let component: AbiturientsDetailsComponent;
  let fixture: ComponentFixture<AbiturientsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbiturientsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiturientsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
