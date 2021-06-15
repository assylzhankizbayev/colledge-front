import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabExpertsComponent } from './lab-experts.component';

describe('LabExpertsComponent', () => {
  let component: LabExpertsComponent;
  let fixture: ComponentFixture<LabExpertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabExpertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
