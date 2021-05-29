import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsLayoutComponent } from './experts-layout.component';

describe('ExpertsLayoutComponent', () => {
  let component: ExpertsLayoutComponent;
  let fixture: ComponentFixture<ExpertsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
