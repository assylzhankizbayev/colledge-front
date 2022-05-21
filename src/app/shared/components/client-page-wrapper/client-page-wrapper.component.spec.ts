import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPageWrapperComponent } from './client-page-wrapper.component';

describe('ClientPageWrapperComponent', () => {
  let component: ClientPageWrapperComponent;
  let fixture: ComponentFixture<ClientPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPageWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
