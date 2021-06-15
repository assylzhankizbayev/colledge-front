import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsMainComponent } from './experts-main.component';

describe('ExpertsMainComponent', () => {
  let component: ExpertsMainComponent;
  let fixture: ComponentFixture<ExpertsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
