import { TestBed } from '@angular/core/testing';

import { InputCardService } from './input-card.service';

describe('InputCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputCardService = TestBed.get(InputCardService);
    expect(service).toBeTruthy();
  });
});
