import { TestBed } from '@angular/core/testing';

import { Generation3Service } from './generation3.service';

describe('Generation3Service', () => {
  let service: Generation3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generation3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
