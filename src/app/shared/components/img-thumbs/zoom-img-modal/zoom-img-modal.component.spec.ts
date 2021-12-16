import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomImgModalComponent } from './zoom-img-modal.component';

describe('ZoomImgModalComponent', () => {
  let component: ZoomImgModalComponent;
  let fixture: ComponentFixture<ZoomImgModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomImgModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomImgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
