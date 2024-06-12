import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneStatusComponent } from './done-status.component';

describe('DoneStatusComponent', () => {
  let component: DoneStatusComponent;
  let fixture: ComponentFixture<DoneStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
