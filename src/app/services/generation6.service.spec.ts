import { TestBed } from '@angular/core/testing';

import { Generation6Service } from './generation6.service';

describe('Generation6Service', () => {
  let service: Generation6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generation6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
