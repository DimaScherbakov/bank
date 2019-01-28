import { TestBed, async, inject } from '@angular/core/testing';

import { PincodeGuard } from './pincode.guard';

describe('PincodeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PincodeGuard]
    });
  });

  it('should ...', inject([PincodeGuard], (guard: PincodeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
