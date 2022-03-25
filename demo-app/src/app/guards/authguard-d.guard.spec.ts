import { TestBed } from '@angular/core/testing';

import { AuthguardDGuard } from './authguard-d.guard';

describe('AuthguardDGuard', () => {
  let guard: AuthguardDGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthguardDGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
