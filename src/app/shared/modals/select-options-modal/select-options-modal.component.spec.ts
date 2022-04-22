import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionsModalComponent } from './select-options-modal.component';

describe('SelectOptionsModalComponent', () => {
  let component: SelectOptionsModalComponent;
  let fixture: ComponentFixture<SelectOptionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOptionsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
