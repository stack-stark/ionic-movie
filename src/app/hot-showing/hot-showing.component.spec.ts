import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotShowingComponent } from './hot-showing.component';

describe('HotShowingComponent', () => {
  let component: HotShowingComponent;
  let fixture: ComponentFixture<HotShowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotShowingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
