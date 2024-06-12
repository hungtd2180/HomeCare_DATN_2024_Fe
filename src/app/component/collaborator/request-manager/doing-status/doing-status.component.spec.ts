import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingStatusComponent } from './doing-status.component';

describe('DoingStatusComponent', () => {
  let component: DoingStatusComponent;
  let fixture: ComponentFixture<DoingStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoingStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
