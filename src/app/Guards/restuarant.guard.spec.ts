import { TestBed } from '@angular/core/testing';

import { RestuarantGuard } from './restuarant.guard';

describe('RestuarantGuard', () => {
  let guard: RestuarantGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestuarantGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
