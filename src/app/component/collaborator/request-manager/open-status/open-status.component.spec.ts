import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenStatusComponent } from './open-status.component';

describe('OpenStatusComponent', () => {
  let component: OpenStatusComponent;
  let fixture: ComponentFixture<OpenStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
