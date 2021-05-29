import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentLayoutComponent } from './equipment-layout.component';

describe('EquipmentLayoutComponent', () => {
  let component: EquipmentLayoutComponent;
  let fixture: ComponentFixture<EquipmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
