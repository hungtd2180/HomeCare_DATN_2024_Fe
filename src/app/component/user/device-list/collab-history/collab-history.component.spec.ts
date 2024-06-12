import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabHistoryComponent } from './collab-history.component';

describe('CollabHistoryComponent', () => {
  let component: CollabHistoryComponent;
  let fixture: ComponentFixture<CollabHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollabHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
