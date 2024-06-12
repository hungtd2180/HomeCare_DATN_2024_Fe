import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorRegisterComponent } from './collaborator-register.component';

describe('CollaboratorRegisterComponent', () => {
  let component: CollaboratorRegisterComponent;
  let fixture: ComponentFixture<CollaboratorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
