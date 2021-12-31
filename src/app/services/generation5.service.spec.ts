import { TestBed } from '@angular/core/testing';

import { Generation5Service } from './generation5.service';

describe('Generation5Service', () => {
  let service: Generation5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generation5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
