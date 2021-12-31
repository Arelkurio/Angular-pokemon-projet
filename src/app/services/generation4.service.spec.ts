import { TestBed } from '@angular/core/testing';

import { Generation4Service } from './generation4.service';

describe('Generation4Service', () => {
  let service: Generation4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generation4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
