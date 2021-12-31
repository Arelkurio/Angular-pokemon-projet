import { TestBed } from '@angular/core/testing';

import { Generation2Service } from './generation2.service';

describe('Generation2Service', () => {
  let service: Generation2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Generation2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
