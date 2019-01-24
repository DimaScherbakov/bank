import { TestBed } from '@angular/core/testing';

import { PincodeService } from './pincode.service';

describe('PincodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PincodeService = TestBed.get(PincodeService);
    expect(service).toBeTruthy();
  });
  it('has variable to count avaliable mistakes', () => {
    const service: PincodeService = TestBed.get(PincodeService);
    expect(service.counterMistakes).toBeTruthy();
  });
});
