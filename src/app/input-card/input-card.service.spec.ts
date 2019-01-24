import { TestBed } from '@angular/core/testing';

import { InputCardService } from './input-card.service';

describe('InputCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputCardService = TestBed.get(InputCardService);
    expect(service).toBeTruthy();
  });
  it('wrong card ids are not avaliable', () => {
    const service: InputCardService = TestBed.get(InputCardService);
    expect(service.isIdInDB('123123123')).toEqual(false);
  });
});
