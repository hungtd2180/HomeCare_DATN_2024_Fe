import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabItemComponent } from './collab-item.component';

describe('CollabItemComponent', () => {
  let component: CollabItemComponent;
  let fixture: ComponentFixture<CollabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollabItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
