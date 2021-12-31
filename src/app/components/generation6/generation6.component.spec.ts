import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation6Component } from './generation6.component';

describe('Generation6Component', () => {
  let component: Generation6Component;
  let fixture: ComponentFixture<Generation6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Generation6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Generation6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
