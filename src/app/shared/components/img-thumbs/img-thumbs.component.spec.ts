import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgThumbsComponent } from './img-thumbs.component';

describe('ImgThumbsComponent', () => {
  let component: ImgThumbsComponent;
  let fixture: ComponentFixture<ImgThumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgThumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgThumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
