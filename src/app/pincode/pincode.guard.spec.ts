import { TestBed, async, inject } from '@angular/core/testing';

import { PincodeGuard } from './pincode.guard';
import {Router} from '@angular/router';

describe('PincodeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PincodeGuard,
        {
          provide: Router,
          useClass: class { navigateByUrl = jasmine.createSpy('navigateByUrl'); }
        }]
    });
  });

  it('should ...', inject([PincodeGuard], (guard: PincodeGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should pass the route when card with correct data exist (currentCard)', inject([PincodeGuard], () => {
    const guard = TestBed.get(PincodeGuard);
    guard.pincodeService.findCurrentCard = () => { guard.pincodeService.currentCard = {};};
    expect(guard.canActivate()).toEqual(true);
  }));
  it('should not pass the route when card is undefined (currentCard)', inject([PincodeGuard], () => {
    const guard = TestBed.get(PincodeGuard);
    expect(guard.canActivate()).toEqual(false);
  }));
});
