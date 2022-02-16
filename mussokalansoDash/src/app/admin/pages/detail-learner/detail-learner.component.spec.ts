import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLearnerComponent } from './detail-learner.component';

describe('DetailLearnerComponent', () => {
  let component: DetailLearnerComponent;
  let fixture: ComponentFixture<DetailLearnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLearnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLearnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
