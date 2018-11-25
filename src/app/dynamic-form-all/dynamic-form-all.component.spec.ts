import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormAllComponent } from './dynamic-form-all.component';

describe('DynamicFormAllComponent', () => {
  let component: DynamicFormAllComponent;
  let fixture: ComponentFixture<DynamicFormAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
