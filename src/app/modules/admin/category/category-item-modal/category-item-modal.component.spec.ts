import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemModalComponent } from './category-item-modal.component';

describe('CategoryItemModalComponent', () => {
  let component: CategoryItemModalComponent;
  let fixture: ComponentFixture<CategoryItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
