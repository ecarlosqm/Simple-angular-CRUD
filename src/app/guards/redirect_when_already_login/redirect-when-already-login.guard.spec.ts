import { TestBed } from '@angular/core/testing';

import { RedirectWhenAlreadyLoginGuard } from './redirect-when-already-login.guard';

describe('RedirectWhenAlreadyLoginGuard', () => {
  let guard: RedirectWhenAlreadyLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectWhenAlreadyLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
