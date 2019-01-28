import { TestBed, async, inject } from '@angular/core/testing';

import { OperationsGuard } from './operations.guard';

describe('OperationsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperationsGuard]
    });
  });

  it('should ...', inject([OperationsGuard], (guard: OperationsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
