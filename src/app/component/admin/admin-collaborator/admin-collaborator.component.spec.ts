import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollaboratorComponent } from './admin-collaborator.component';

describe('AdminCollaboratorComponent', () => {
  let component: AdminCollaboratorComponent;
  let fixture: ComponentFixture<AdminCollaboratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCollaboratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
