import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsLayoutComponent } from './labs-layout.component';

describe('LabsLayoutComponent', () => {
  let component: LabsLayoutComponent;
  let fixture: ComponentFixture<LabsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
