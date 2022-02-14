import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModuleByCategComponent } from './list-module-by-categ.component';

describe('ListModuleByCategComponent', () => {
  let component: ListModuleByCategComponent;
  let fixture: ComponentFixture<ListModuleByCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListModuleByCategComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModuleByCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
