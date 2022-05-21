import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDirectoraComponent } from './blog-directora.component';

describe('BlogDirectoraComponent', () => {
  let component: BlogDirectoraComponent;
  let fixture: ComponentFixture<BlogDirectoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDirectoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDirectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
