import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation4Component } from './generation4.component';

describe('Generation4Component', () => {
  let component: Generation4Component;
  let fixture: ComponentFixture<Generation4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Generation4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Generation4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
