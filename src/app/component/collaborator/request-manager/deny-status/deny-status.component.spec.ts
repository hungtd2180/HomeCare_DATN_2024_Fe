import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenyStatusComponent } from './deny-status.component';

describe('DenyStatusComponent', () => {
  let component: DenyStatusComponent;
  let fixture: ComponentFixture<DenyStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenyStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DenyStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
