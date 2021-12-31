import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation7Component } from './generation7.component';

describe('Generation7Component', () => {
  let component: Generation7Component;
  let fixture: ComponentFixture<Generation7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Generation7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Generation7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
