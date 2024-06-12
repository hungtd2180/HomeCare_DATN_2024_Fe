import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRateComponent } from './request-rate.component';

describe('RequestRateComponent', () => {
  let component: RequestRateComponent;
  let fixture: ComponentFixture<RequestRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
