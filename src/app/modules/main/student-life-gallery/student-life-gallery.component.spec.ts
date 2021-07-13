import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLifeGalleryComponent } from './student-life-gallery.component';

describe('StudentLifeGalleryComponent', () => {
  let component: StudentLifeGalleryComponent;
  let fixture: ComponentFixture<StudentLifeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLifeGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLifeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
