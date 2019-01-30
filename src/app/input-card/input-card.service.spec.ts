import { TestBed } from '@angular/core/testing';

import { InputCardService } from './input-card.service';

describe('InputCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputCardService = TestBed.get(InputCardService);
    expect(service).toBeTruthy();
  });
  it('wrong card ids are not avaliable (isIdInDB)', () => {
    const service: InputCardService = TestBed.get(InputCardService);
    expect(service.isIdInDB('123123123')).toEqual(false);
  });
  it('can detect blocked card', () => {
    const service: InputCardService = TestBed.get(InputCardService);
    expect(service.isBlocked('0000000000000000')).toEqual(false);
  });
  it('isIdInDB finds only real card ids', () => {
    const service: InputCardService = TestBed.get(InputCardService);
    service.isIdInDB('0000000000000000');
    expect(service.currentId).toEqual('0000000000000000');
  });
});
