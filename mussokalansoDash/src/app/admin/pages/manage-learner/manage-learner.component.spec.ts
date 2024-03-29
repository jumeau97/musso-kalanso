import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLearnerComponent } from './manage-learner.component';

describe('ManageLearnerComponent', () => {
  let component: ManageLearnerComponent;
  let fixture: ComponentFixture<ManageLearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageLearnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
