import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaCardComponent } from './qa-card.component';

describe('QaCardComponent', () => {
  let component: QaCardComponent;
  let fixture: ComponentFixture<QaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
