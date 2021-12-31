import { TestBed } from '@angular/core/testing';

import { Generation7Service } from './generation7.service';

describe('Generation7Service', () => {
  let service: Generation7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generation7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
