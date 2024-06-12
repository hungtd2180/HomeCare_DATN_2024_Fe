import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorLoginComponent } from './collaborator-login.component';

describe('CollaboratorLoginComponent', () => {
  let component: CollaboratorLoginComponent;
  let fixture: ComponentFixture<CollaboratorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
