import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiturientsComponent } from './abiturients.component';

describe('AbiturientsComponent', () => {
  let component: AbiturientsComponent;
  let fixture: ComponentFixture<AbiturientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbiturientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiturientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
