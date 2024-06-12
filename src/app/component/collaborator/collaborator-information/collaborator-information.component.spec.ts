import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorInformationComponent } from './collaborator-information.component';

describe('CollaboratorInformationComponent', () => {
  let component: CollaboratorInformationComponent;
  let fixture: ComponentFixture<CollaboratorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
