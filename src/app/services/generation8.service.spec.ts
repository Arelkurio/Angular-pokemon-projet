import { TestBed } from '@angular/core/testing';

import { Generation8Service } from './generation8.service';

describe('Generation8Service', () => {
  let service: Generation8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generation8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
