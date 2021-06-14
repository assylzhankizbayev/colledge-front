import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabaratoryComponent } from './labaratory.component';

describe('LabaratoryComponent', () => {
  let component: LabaratoryComponent;
  let fixture: ComponentFixture<LabaratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabaratoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabaratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
