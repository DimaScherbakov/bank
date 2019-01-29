import {TestBed, async, inject, getTestBed} from '@angular/core/testing';
import {Router} from '@angular/router';

import { OperationsGuard } from './operations.guard';

describe('OperationsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [OperationsGuard,   {
        provide: Router,
        useClass: class { navigateByUrl = jasmine.createSpy("navigateByUrl"); }
      }]
    });
  });

  it('should ...', inject([OperationsGuard], (guard: OperationsGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should pass the route when card data (currentCard) exists', inject([OperationsGuard], (guard: OperationsGuard) => {
    const g = TestBed.get(OperationsGuard);
    g.pincodeService.currentCard = {};
    expect(g.pincodeService.currentCard).not.toBeUndefined();
    expect(g.canActivate()).toEqual(true);
  }));
  it('should not pass the route when card data (currentCard) is undefined', inject([OperationsGuard], (guard: OperationsGuard) => {
    const g = TestBed.get(OperationsGuard);
    g.pincodeService.currentCard = undefined;
    expect(g.pincodeService.currentCard).toBeUndefined();
    expect(g.canActivate()).toEqual(false);
  }));
});
